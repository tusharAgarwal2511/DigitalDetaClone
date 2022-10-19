import React from 'react'
import './ContentServices.css'
import ServicesCard from './ServicesCard'



const ContentServices = () => {
    return (
        <div className='content-services-container'>

            <div className='content-services-text'>
                <h1>We bring you the complate Digital Marketing Solution</h1>
                <br />
                <p className='text'>We work together to craft the most extraodinary brand experiences </p>
            </div>


            <div className='content-services-cards-div'>


                <ServicesCard
                    title='Organic Search'
                    text="Your site will be king in the search engine SERPs and convert your organic traffic for lead generation and better sales."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/organic.png'
                />

                <ServicesCard
                    title='Link Building'
                    text="We create a robust backlink profile for your website that will accelerate your website’s ranking process in major search engines."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/link.png'
                />

                <ServicesCard
                    title='SEO Auditing'
                    text="Why is your site not ranking as highly as it should be? Know about the missing SEO elements through our SEO audit."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/auditing.png'
                />

                <ServicesCard
                    title='Paid Search'
                    text="PPC or SEM is the best speed-to-market method to establish robust online visibility and get one step ahead of your competitors."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/paid.png'
                />

                <ServicesCard
                    title='Marketing Research'
                    text="We, at Digitaldeta, offer tailored qualitative and quantitative market research to understand the market, including brand perception, competitors, and audiences."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/marketing.png'
                />

                <ServicesCard
                    title='Media Marketing'
                    text="Leverage the real power of social media marketing by opting for our impactful and insightful marketing strategies. Establish your brand now."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/media.png'
                />

                <ServicesCard
                    title='Web Designing'
                    text="Your business’s website the digital biopsy of your business. We will distill the pure essence of the brand with bespoke website designs."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/business.png'
                />

                <ServicesCard
                    title='Content Marketing'
                    text="Let the words speak about your brand. We strategically craft content that creates an instant brand reputation among the visitors."
                    imageUrl='https://digitaldeta.com/wp-content/uploads/2020/03/support.png'
                />


            </div>
        </div>
    )
}

export default ContentServices