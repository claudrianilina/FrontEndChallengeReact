using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FrontEndChallengeReact.Controllers.Phones.V1
{
    using FrontEndChallengeReact.Model;
    using Microsoft.AspNetCore.Cors;
    using Microsoft.AspNetCore.Mvc;

    [Produces("application/json")]
    [Route("api/phones/[action]")]
    public class PhonesController : Controller
    {
        [HttpGet]
        public IEnumerable<Phone> Get()
        {
            var phoneCollection = GetPhoneCollection();
            return phoneCollection;
        }

        [HttpGet("{id}")]
        public Phone Get(int id)
        {
            List<Phone> phoneCollection = GetPhoneCollection();

            var obtainedPhone = phoneCollection.Find(p => p.id == id);
            if(obtainedPhone != null)
            {
                return obtainedPhone;
            } else
            {
                return new Phone();
            }
            
        }

        private List<Phone> GetPhoneCollection()
        {
            List<Phone> phoneCollection = new List<Phone>()
            {
                new Phone
                {
                    id = 1,
                    title = "Samsung Galaxy J7",
                    color = "Black",
                    description = "Samsung Galaxy J7 smartphone was launched in June 2015. The phone comes with a 5.50-inch touchscreen display with a resolution of 720 pixels by 1280 pixels. Samsung Galaxy J7 price in India starts from Rs. 6,994.",
                    memory = "16GB",
                    price = "233,99€",
                    image = "http://images.samsung.com/is/image/samsung/es-galaxy-j7-2017-sm-j730fzkdphe-frontblack-68358717?$PD_GALLERY_JPG$"

                },
                new Phone
                {
                    id = 2,
                    title = "Vivo V9",
                    color = "Blue",
                    description = "Vivo V9 smartphone made its debut in the Indian markets in March 2018. The smartphone has a 6.30-inch touchscreen display with 1080 pixels by 2280 pixels. It measures 154.80 x 75.00 x 7.90 in dimension and weighs 150 grams.",
                    memory = "16GB",
                    price = "350€",
                    image = "https://cdn2.gsmarena.com/vv/bigpic/vivo-v9-.jpg"

                },
                                new Phone
                {
                    id = 3,
                    title = "XIAOMI REDMI NOTE 5 PRO",
                    color = "Black",
                    description = "Xiaomi presents an all-new smartphone named Redmi Note 5 Pro that is sleek, stylish and fits into the requirements of all gadget lovers. Designed to match international standards, this smartphone is expected to be the next big thing in the market of modish gadgets.",
                    memory = "64GB",
                    price = "250€",
                    image = "https://www.mediaelectronica.com/24812-large_default/xiaomi-redmi-note-5-pro-3gb32gb.jpg"

                },
                 new Phone
                {
                    id = 4,
                    title = "IPHONE 8",
                    color = "White",
                    description = "In terms of design, the iPhone 8 is what you’d expect from an ‘S’ upgrade. Why? The iPhone 8 sports a similar form factor to the iPhone 7 (and 6s, and 6) but with a handful of changes to make the phone competitive. So, while it’s slightly thicker than the iPhone 7 at 138.4 x 67.3 x 7.3mm and 10g heavier at 148g, there’s a reason why.",
                    memory = "64GB/256GB",
                    price = "800€",
                    image = "http://cdn.eglobalcentral.com.es/images/thumbnails/59/130/130/apple-iphone-8-256gb-a1863-gold.jpg"

                },
                new Phone
                {
                    id = 5,
                    title = "GOOGLE Pixel 2",
                    color = "Blue",
                    description = "The Pixel 2 clues us in on why Google called its phone series Pixel: it was building the best camera on a phone. This second-generation effort fulfills that promise with not only the best-in-class photos, but also dual front-facing speakers and water-resistance. It's a great size, but you'll need to be okay with its dated looks and the fact that there’s no headphone jack.",
                    memory = "64GB/128GB",
                    price = "780€",
                    image = "https://cdn2.gsmarena.com/vv/bigpic/google-pixel-2.jpg"

                },

            };
            return phoneCollection;
        }
    }
}
