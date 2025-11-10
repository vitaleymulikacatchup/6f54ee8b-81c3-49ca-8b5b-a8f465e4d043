"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Mail, Star } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="large"
      background="animatedGrid"
      cardStyle="glass-elevated"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="layered"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Café Brew"
          button={{
            text: "Order Now",
            href: "https://ordernow.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Where every cup tells a story"
          description="Experience the perfect blend of premium coffee, cozy atmosphere, and friendly service at Café Brew"
          tag="Welcome to Café Brew"
          tagIcon={Coffee}
          buttons={[
            { text: "View Menu", href: "product" },
            { text: "Visit Us", href: "contact" }
          ]}
          mediaItems={[
            {
              imageSrc: "https://pixabay.com/get/g16e452600b8bed0f4fb518c1fa0890237d1d7d6509fb019d33c1f7b8623cec2c49fdcf30660932fed4a7a6c71e5a9856eecb591f33eeacd483c674528bfe0408_1280.jpg",
              imageAlt: "Cozy coffee shop interior"
            },
            {
              imageSrc: "https://pixabay.com/get/g0db9b52d70264a6334d2ac058cdfa0d85201c63e7d60f5aeb527d825af2b1e177be8ded68f10a4f6a3f79982a7b08d59fc91a4e4565ac112677dea419819b794_1280.jpg",
              imageAlt: "Fresh espresso"
            },
            {
              imageSrc: "https://pixabay.com/get/gb7b7eac34af6f9cb99373ecb7a24db0e054ebe043bc5eaf55663c249722458ff34ab12eb4ed8a3612c7246908ee9b79d3ebff4e790b130a2f15bf7f5307baf1c_1280.jpg",
              imageAlt: "Latte art"
            },
            {
              imageSrc: "https://pixabay.com/get/gc45d9b65615d288686016db9db7f9ed99c2391f92f6e6a3efaf76966f0bf708587751493c1398ea80443f8d546b289c1cb2fe8526df8c4404c0bda91d5131577_1280.jpg",
              imageAlt: "Fresh pastry"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Founded in 2018, Café Brew started as a dream to create the perfect neighborhood coffee experience.",
            "We source our beans directly from sustainable farms and roast them in-house daily to ensure maximum freshness and flavor."
          ]}
          buttons={[
            { text: "Learn More", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Featured Menu"
          description="Discover our most popular coffee drinks and fresh pastries"
          tag="Best Sellers"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Café Brew",
              name: "Signature Espresso",
              price: "$3.50",
              rating: 5,
              reviewCount: "2.1k",
              imageSrc: "https://pixabay.com/get/g0db9b52d70264a6334d2ac058cdfa0d85201c63e7d60f5aeb527d825af2b1e177be8ded68f10a4f6a3f79982a7b08d59fc91a4e4565ac112677dea419819b794_1280.jpg",
              imageAlt: "Signature Espresso"
            },
            {
              id: "2",
              brand: "Café Brew",
              name: "Caramel Cappuccino",
              price: "$4.25",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://pixabay.com/get/gb7b7eac34af6f9cb99373ecb7a24db0e054ebe043bc5eaf55663c249722458ff34ab12eb4ed8a3612c7246908ee9b79d3ebff4e790b130a2f15bf7f5307baf1c_1280.jpg",
              imageAlt: "Caramel Cappuccino"
            },
            {
              id: "3",
              brand: "Café Brew",
              name: "Fresh Croissant",
              price: "$2.75",
              rating: 4,
              reviewCount: "956",
              imageSrc: "https://pixabay.com/get/gc45d9b65615d288686016db9db7f9ed99c2391f92f6e6a3efaf76966f0bf708587751493c1398ea80443f8d546b289c1cb2fe8526df8c4404c0bda91d5131577_1280.jpg",
              imageAlt: "Fresh Croissant"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Coffee Lovers Everywhere"
          description="Join thousands of customers who have made us their daily coffee destination"
          tag="Community"
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/ge295bd4859c473c5f84b2a6512452c44409d0b2f5bdcf5c27aeeed4984e03bd68c8472d1aa40e40c706502bd16805c67cbee14b8ef74aa0196ec5d14b2b6c5c4_1280.jpg",
            "https://pixabay.com/get/gf522cfb991224e42c3ae7de2046e851db4beadfba0dba7579fb2caad10b44536fdce49129f7d29b3ec9bb9da31ad3740dbc3639f1b82a245f96467f1d0f12a1e_1280.jpg",
            "https://pixabay.com/get/g79265f133a56b41fe2e3b3e843b72bf99110cff6315a51fc1a65351064e5e3a2c89098178fc5d42fbd5348f7890fc65fe1946efbc44dd3b3e961a7b90d1413f7_1280.jpg",
            "https://pixabay.com/get/g1660594da0a8749fd8034c0c606dc7a49c0ca7b0d62b0461878b0d9d273f0c6c8e5901311cf923cc90fb097c6d3818f52643034708a359a03eca49022f9f9510_1280.jpg",
            "https://pixabay.com/get/g7ab34b3d7369c79fa8e618be7a6706a4b6a410552547429761b96bbdd7d1a3278d4811bcbd001782251af62831c00586d5818248f74f0f62481377d595754060_1280.jpg",
            "https://pixabay.com/get/g4e0b25d5018e8eeddf5a50e56dcf98f87727c16cf6b7798f1b7dbb8973fbbe888adc83c96c37832d0bc44b9d367c89469d2b36687030704669d576f4487130cf_1280.jpg",
            "https://pixabay.com/get/g5073e27356ad9b4b80c3b6654ea077ebcb0dc8a373b78ed05ca26b188e30cb3d100a16b320fdba9e433dd1f704e8e106c88dc9d6a1c772e7c6fe3ed3a2bf8973_1280.jpg"
          ]
          speed={40}
          showCard={true}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real stories from real coffee lovers who visit us daily"
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Manager",
              testimonial: "The best coffee in town! The atmosphere is perfect for both work meetings and casual catch-ups with friends.",
              imageSrc: "https://pixabay.com/get/gbb4ebf43c7eeb2834effb018b0f19181d21f6d9950d11b883e01be6f5730a238da6e75c6efccb8f56abe2f6df2ef7afd7fac2ada9163fdfd088a24b0b646aaf1_1280.jpg",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Software Developer",
              testimonial: "I come here every morning before work. The baristas know my order by heart and the coffee is consistently excellent.",
              imageSrc: "https://pixabay.com/get/g496804e1c050902a65f1727836b7bf17f604b35db2bd613fc983aaa546fb3ac031aa7904226e907d924489c519e40f6e142eb00e1bcab65627c0c27909ee3377_1280.jpg",
              imageAlt: "Mike Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "College Student",
              testimonial: "Perfect study spot with amazing coffee and pastries. The WiFi is fast and the vibe is incredibly welcoming.",
              imageSrc: "https://pixabay.com/get/gf5b24dbcd05401d237d11617838b0597726d8063075f9c2219b0663850cbcdef62afb6fa488de37d1aad109ee50de9bf3e611a5bc46aceae4a40302b1c299db7_1280.jpg",
              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Local Resident",
              testimonial: "This place has become my second home. Great coffee, friendly staff, and a true community feel.",
              imageSrc: "https://pixabay.com/get/g9b74048575daf92bb23c027ae56d78a280611d770063c193a7d277c4c015d611aa2ab0380f68e1bb2df9756c9278bf098420bfadc26bac0bf851a44b7b8358d0_1280.jpg",
              imageAlt: "David Kim"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Everything you need to know about visiting Café Brew"
          tag="FAQ"
          textboxLayout="default"
          imageSrc="https://pixabay.com/get/g48b4f47448570980b43427de498537d798d97c0c04167bd1cd212ed5b7d4a18832b9753d889152c6d572b1eaa5530ecf5e418e37f51f2327e5fa259290e3a1fe_1280.jpg"
          imageAlt="Coffee barista at work"
          mediaPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday to Friday from 6:30 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM."
            },
            {
              id: "2",
              title: "Do you offer dairy-free alternatives?",
              content: "Yes! We have oat milk, almond milk, soy milk, and coconut milk available for all our coffee drinks."
            },
            {
              id: "3",
              title: "Can I work from your café?",
              content: "Absolutely! We have free WiFi, plenty of power outlets, and a comfortable atmosphere perfect for remote work or studying."
            },
            {
              id: "4",
              title: "Do you take custom orders for events?",
              content: "Yes, we offer catering services for corporate events, meetings, and special occasions. Please contact us at least 48 hours in advance."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Newsletter"
          tagIcon={Mail}
          title="Stay Connected with Café Brew"
          description="Be the first to know about new menu items, special events, and exclusive offers. Join our coffee community today!"
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive marketing emails from Café Brew. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Café Brew"
          copyrightText="© 2025 | Café Brew"
          columns={[
            {
              title: "Menu",
              items: [
                { label: "Coffee Drinks", href: "product" },
                { label: "Pastries", href: "product" },
                { label: "Seasonal Specials", href: "product" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Coffee Sourcing", href: "about" },
                { label: "Sustainability", href: "about" }
              ]
            },
            {
              title: "Visit",
              items: [
                { label: "Location & Hours", href: "contact" },
                { label: "Events", href: "contact" },
                { label: "Catering", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}