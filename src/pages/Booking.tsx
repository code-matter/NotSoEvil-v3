import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import EvilLogo from 'components/UI/EvilLogo'
import LanguageSelector from 'components/UI/LanguageSelector'
import Logos from 'components/UI/Logos'
import SmileySun from 'components/UI/SmileySun'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { rules } from 'utils/forms'

type IBooking = {}

interface BookingFormValues {

}

const Booking = (props: IBooking) => {
    const { t } = useTranslation()
    const [form] = useForm<BookingFormValues>()
    return (
        <div className='booking'>
            <LanguageSelector />
            <Logos />
            <Form form={form} layout='vertical' onFinish={e => console.log(e)}>
                <h2>CONTACT</h2>
                <div className='form-items-flex'>
                    <Form.Item name="firstName" label={t('form.firstName')} rules={[rules.required]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="lastName" label={t('form.lastName')}>
                        <Input />
                    </Form.Item>
                </div>
                <div className='form-items-flex'>
                    <Form.Item name="pronouns" label={t('form.pronouns')}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email" label={t('form.email')}>
                        <Input />
                    </Form.Item>
                </div>
                <Button type="primary" htmlType='submit'>Send</Button>
            </Form>
        </div>
    )
}

export default Booking