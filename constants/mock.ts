import { IEmailTemplateStructure } from '../types/emailBuilder';
import { IWebsiteStructure } from '../types/webSiteBuilder';

export const mockedData: IWebsiteStructure = {
  sections: [
    {
      backgroundColor: '#344e41',
      size: 'Full Width',
      textColor: '#E5EEF5',
      rows: [
        {
          backgroundColor: '#344e41',
          columns: [
            {
              elements: [
                { content: 'Welcome to Amazon', type: 'HEADLINE' },
                {
                  content: 'At Amazon, we are committed to providing',
                  type: 'PARAGRAPH',
                },
              ],
            },
            {
              elements: [
                { content: 'Welcome to Amazon', type: 'HEADLINE' },
                {
                  content: 'At Amazon, we are committed to providing',
                  type: 'PARAGRAPH',
                },
              ],
            },
            {
              elements: [
                { content: 'Welcome to Amazon', type: 'HEADLINE' },
                {
                  content: 'At Amazon, we are committed to providing',
                  type: 'PARAGRAPH',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      backgroundColor: '#a3b18a',
      size: 'Wide',
      textColor: '#fff',
      rows: [
        {
          columns: [
            {
              elements: [
                {
                  content: 'Our Products and Services',
                  type: 'SUB-HEADLINE',
                },
                {
                  content:
                    'In addition to our e-commerce platform, we offer a variety of products and services to meet the needs of our customers and partners. Amazon Prime provides members with fast and free shipping, exclusive deals, and access to streaming services. Amazon Web Services (AWS) offers cloud computing services to businesses and developers, while our Kindle e-readers, Fire tablets, Echo smart speakers, and Alexa voice assistant provide innovative solutions for everyday life.',
                  type: 'PARAGRAPH',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      backgroundColor: '#588157',
      size: 'Medium',
      rows: [
        {
          columns: [
            {
              elements: [
                {
                  content: 'Our Brand Values',
                  type: 'SUB-HEADLINE',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      backgroundColor: '#F4A261',
      rows: [
        {
          columns: [
            {
              elements: [
                {
                  content: 'Welcome to Google',
                  type: 'HEADLINE',
                },
              ],
            },
            {
              elements: [
                {
                  content:
                    'At Google, we are committed to innovation, accessibility, trust, collaboration, and impact. Our diverse product lineup includes Google Search, Google Ads, Google Cloud, Google Workspace, Android operating system, Google Chrome, Google Pixel smartphones, and more. We strive for continuous improvement, user satisfaction, and creating a positive impact on society through initiatives like Google.org and environmental sustainability efforts.',
                  type: 'PARAGRAPH',
                },
              ],
            },
          ],
        },
      ],
      size: 'Full Width',
    },
    {
      backgroundColor: '#2A9D8F',
      rows: [
        {
          columns: [
            {
              elements: [
                {
                  content: 'Innovative Technology Solutions for Everyone',
                  type: 'SUB-HEADLINE',
                },
              ],
            },
            {
              elements: [
                {
                  content:
                    'At Google, we believe in making information and technology accessible to everyone, regardless of location, language, or ability. Our reliable and innovative technology solutions are designed to meet the needs of individuals, businesses, and organizations alike.',
                  type: 'PARAGRAPH',
                },
              ],
            },
            {
              elements: [
                {
                  content: 'Learn More',
                  type: 'BUTTON',
                },
              ],
            },
          ],
        },
        {
          columns: [
            {
              elements: [
                {
                  content:
                    "Google Pixel smartphones | Google's commitment to innovation and accessibility",
                  type: 'IMAGE',
                  url: 'https://www.bhphotovideo.com/images/images2500x2500/google_ga00655_us_pixel_3a_smartphone_unlocked_1475547.jpg',
                },
              ],
            },
          ],
        },
      ],
      size: 'Wide',
    },
    {
      backgroundColor: '#2A9D8F',
      rows: [
        {
          columns: [
            {
              elements: [
                {
                  content: 'Our Brand Values',
                  type: 'HEADLINE',
                },
              ],
            },
          ],
        },
        // {
        //   columns: [
        //     {
        //       elements: [
        //         {
        //           content: [
        //             'Innovation',
        //             'Accessibility',
        //             'Trust',
        //             'Collaboration',
        //             'Impact',
        //           ],
        //           type: 'BULLET LIST',
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      size: 'Medium',
      textColor: '#E5EEF5',
    },
    {
      backgroundColor: '#E76F51',
      rows: [
        {
          columns: [
            {
              elements: [
                {
                  content:
                    'Join the millions of satisfied users who trust Google for their technology needs.',
                  type: 'PARAGRAPH',
                },
              ],
            },
            {
              elements: [
                {
                  content: 'Get Started',
                  type: 'BUTTON',
                },
              ],
            },
          ],
        },
      ],
      size: 'Small',
    },
    {
      backgroundColor: '#264653',
      rows: [
        {
          columns: [
            // {
            //   elements: [
            //     {
            //       content: 'What products and services does Google offer?',
            //       type: 'FAQ',
            //     },
            //   ],
            // },
            {
              elements: [
                {
                  content:
                    'Google offers a diverse product lineup, including Google Search, Google Ads, Google Cloud, Google Workspace, Android operating system, Google Chrome, Google Pixel smartphones, and more.',
                  type: 'PARAGRAPH',
                },
              ],
            },
          ],
        },
        {
          columns: [
            // {
            //   elements: [
            //     {
            //       content: "What is Google's commitment to accessibility?",
            //       type: 'FAQ',
            //     },
            //   ],
            // },
            {
              elements: [
                {
                  content:
                    'At Google, we believe in making information and technology accessible to everyone, regardless of location, language, or ability. We strive to create technology solutions that are inclusive and accessible to all.',
                  type: 'PARAGRAPH',
                },
              ],
            },
          ],
        },
      ],
      size: 'Full Width',
    },
    {
      backgroundColor: '#264653',
      rows: [
        {
          columns: [
            {
              elements: [
                {
                  content:
                    "Join the millions of satisfied users who trust Google for their technology needs. Whether you're an individual, business, or organization, we have reliable and innovative technology solutions to meet your needs.",
                  type: 'PARAGRAPH',
                },
              ],
            },
            {
              elements: [
                {
                  content: 'Get Started',
                  type: 'BUTTON',
                },
              ],
            },
          ],
        },
      ],
      size: 'Wide',
    },
  ],
};

export const emailTemplateMock: IEmailTemplateStructure = {
  Layouts: [
    {
      Elements: [
        {
          align: 'Center',
          height: '',
          image_url:
            'https://thumbs.dreamstime.com/b/business-team-analyzing-statistics-together-22349767.jpg',
          padding: true,
          type: 'Image',
          width: 150,
        },
        {
          padding: true,
          padding_bottom: 0,
          padding_left: 20,
          padding_right: 20,
          padding_top: 0,
          text_color: 'Medium Gray',
          text_elements: [
            {
              align: 'Align left',
              font: 'Helvetice',
              font_size: '36px',
              is_bullet_list: false,
              text: " Unlock the Potential of Your Products with Grinki's Advanced Analytics Solutions",
              text_color: 'default',
              type: 'Heading 1',
            },
            {
              align: 'justify',
              font: 'Helvetice',
              font_size: '18px',
              is_bullet_list: false,
              text: ' Are you ready to take your product performance to the next level? Look no further than Grinki, a leading company specializing in advanced product analytics. With a strong focus on data-driven insights, Grinki empowers businesses to make informed decisions and optimize their product strategies.',
              type: 'Paragraph',
            },
          ],
          type: 'Text',
        },
        {
          align: 'Center',
          height: '',
          image_url:
            'https://hungarytoday.hu/wp-content/uploads/2020/09/D__YT20200915007-1536x1024.jpg',
          padding: false,
          type: 'Image',
          width: '',
        },
        {
          padding: true,
          padding_bottom: 0,
          padding_left: 20,
          padding_right: 20,
          padding_top: 0,
          text_elements: [
            {
              align: 'Align left',
              font: 'Arial',
              font_size: '16px',
              is_bullet_list: false,
              text: ' Gain Deep Visibility into Your Product Performance',
              type: 'Heading 1',
            },
            {
              align: 'Align left',
              font: 'Arial',
              font_size: '14px',
              is_bullet_list: true,
              text: [
                '- Leverage cutting-edge technologies and machine learning algorithms to gain deep visibility into your product performance.',
                '- Understand customer behavior and preferences to tailor your product offerings and marketing strategies.',
                '- Identify areas for improvement and optimize your product strategies for maximum impact.',
              ],
              type: 'Paragraph',
            },
          ],
          type: 'Text',
        },
        {
          align: 'Center',
          height: '',
          image_url:
            'https://www.radio-ip.com/wp-content/uploads/2020/07/Benefits-of-Using-A-Data-Analytics-Tool-772x1536.png',
          padding: false,
          type: 'Image',
          width: '',
        },
        {
          padding: true,
          padding_bottom: 0,
          padding_left: 20,
          padding_right: 20,
          padding_top: 0,
          text_elements: [
            {
              align: 'Align left',
              font: 'Arial',
              font_size: '16px',
              is_bullet_list: false,
              text: " Maximize Your Product's Potential",
              type: 'Heading 1',
            },
            {
              align: 'Align left',
              font: 'Arial',
              font_size: '14px',
              is_bullet_list: true,
              text: [
                "- Make data-driven decisions to maximize your product's potential in the market.",
                '- Stay ahead of the competition by continuously monitoring and analyzing your product performance.',
                '- Drive growth and increase customer satisfaction by understanding their needs and preferences.',
              ],
              type: 'Paragraph',
            },
          ],
          type: 'Text',
        },
        {
          align: 'Center',
          background_color: '#0020F5',
          full_width: false,
          padding: true,
          padding_bottom: 10,
          padding_left: 20,
          padding_right: 20,
          padding_top: 10,
          radius: 10,
          text: " Discover Grinki's Analytics Solutions",
          type: 'Button',
        },
      ],
      Layout: {
        'Background type': 'Content Width',
        Color: '#ffffff',
        'Column Layout': '1',
        padding: true,
        padding_bottom: 20,
        padding_left: 20,
        padding_right: 20,
        padding_top: 10,
      },
    },
    {
      Elements: [
        {
          padding: true,
          padding_bottom: 0,
          padding_left: 20,
          padding_right: 20,
          padding_top: 0,
          text_elements: [
            {
              align: 'Align left',
              color: 'Gray',
              font: 'Helvetica',
              font_size: '14px',
              is_bullet_list: false,
              text: " Don't miss out on the opportunity to transform your product performance. Click the button below to discover how Grinki's analytics solutions can help your business thrive in today's competitive market.\nEnd of structure",
              type: 'Paragraph',
            },
          ],
          type: 'Text',
        },
        {
          Display: 'Icon-text',
          icon_styles: 2,
          padding: true,
          padding_bottom: 20,
          padding_left: 20,
          padding_right: 20,
          padding_top: 10,
          social_items: ['Facebook', 'Instagram', 'Twitter'],
          type: 'Social',
        },
      ],
      Layout: {
        'Background type': 'Content Width',
        Color: '#ffffff',
        'Column Layout': '1',
        padding: true,
        padding_bottom: 20,
        padding_left: 20,
        padding_right: 20,
        padding_top: 10,
      },
    },
  ],
  date: '2023-07-17 00:00:00',
  subject: " Discover Grinki's Analytics Solutions",
};
