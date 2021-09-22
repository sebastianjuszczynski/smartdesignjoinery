import React from 'react';
import PrivacyPolicyHeader from '../PrivacyPolicyHeader';
import { PolicyH4, PolicySection, PolicyParagraph, Container, PolicyContainer } from "./styled"


const PrivacyPolicy = () => {
    return (
        <>
            <Container>
                <PrivacyPolicyHeader />
                <PolicyContainer>
                    <PolicyH4>Our Privacy Policy has been outlined below:</PolicyH4>
                    <PolicySection>1.1 Introduction</PolicySection>
                    <PolicyParagraph>
                        We gather and use information about our website’s users in order to provide products and services and to enable the website to function as intended.
                        <br></br><br></br>
                        We also use this information to better understand how visitors use our website and to improve the user experience.
                    </PolicyParagraph>
                    <PolicySection>1.2 What data we gather</PolicySection>
                    <PolicyParagraph>
                        We may collect the following information:
                        <br></br><br></br>
                        Customer name<br></br>
                        Address, e-mail and telephone contact details<br></br>
                        Additional information required to complete shop orders, such as shipping addresses and payment details (where appropriate)<br></br>
                        Demographic information, such as postcode, preferences and interests<br></br>
                        Website usage data<br></br>
                        Other information relevant to client enquiries<br></br>
                        Other information pertaining to special offers and surveys<br></br>
                        How we use this data<br></br>
                        We use this information to help us understand how you interact with our website, helping us to improve our products and services.<br></br>
                        <br></br>
                        Specifically, we may use data:
                        <br></br><br></br>
                        For our own internal records.<br></br>
                        To improve the products and services we provide.<br></br>
                        To contact you in response to a specific enquiry.<br></br>
                        To send you information pertaining to an online order.<br></br>
                        To customise the website for you.<br></br>
                        Please note that we do not store any credit/debit card details in any manner. All of our credit/debit card payments are completed through the Stripe Secure Payments system, so your credit card information is never directly provided to us, just the payment.
                    </PolicyParagraph>
                    <PolicySection>1.3 Cookies</PolicySection>
                    <PolicyParagraph>
                        A cookie is a small file placed on your computer’s hard drive which enables our website to identify your computer as you view different pages on our website. We don't use these on our website
                    </PolicyParagraph>
                    <PolicySection>1.4 Data Security</PolicySection>
                    <PolicyParagraph>
                        All of your information is stored in a secure fashion, protected by strong physical and electronic security safeguards.
                        <br></br><br></br>
                        We store all personal data in line with the Data Protection Act 2018.
                    </PolicyParagraph>
                    <PolicySection>1.5 Links from our site</PolicySection>
                    <PolicyParagraph>
                        Our website may contain links to other websites.
                        <br></br><br></br>
                        Please note that we have no control of websites outside of our domain. If you provide information to a website to which we link, we are not responsible for its protection and privacy.
                        <br></br><br></br>
                        Always be wary when submitting data to websites. Read the site’s data protection and privacy policies fully.
                    </PolicyParagraph>
                </PolicyContainer>
            </Container>
        </>
    )
}

export default PrivacyPolicy;