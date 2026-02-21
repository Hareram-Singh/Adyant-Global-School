import { Facebook, Youtube, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/adyant logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#f3f1ed] text-sm text-gray-700">

      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-20 grid grid-cols-5 gap-12">

          {/* COLUMN 1 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="" className="h-20" />
            </div>

            <div className="flex gap-4 mt-4">
              <SocialIcon><Facebook size={16} /></SocialIcon>
              <SocialIcon><Youtube size={16} /></SocialIcon>
              <SocialIcon><Instagram size={16} /></SocialIcon>
              <SocialIcon><Linkedin size={16} /></SocialIcon>
            </div>
          </div>

          <FooterColumn
            title="Useful Links"
            links={[
              "About Us",
              "Admissions",
              "Work With Us",
              "Contact Us",
              "School Calendar",
              "Parent Partner Programme",
              "Privacy Policy"
            ]}
          />

          <FooterColumn
            title="Quick Links"
            links={[
              "Events",
              "Blog",
              "Careers",
              "FAQs",
              "Year Book",
              "Parent Login"
            ]}
          />

          <FooterColumn
            title="Admissions"
            links={[
              "Overview",
              "Apply Now",
              "Important Notifications",
              "International Admissions",
              "Why Us",
              "Guidelines",
              "Admission FAQs",
              "Request a Visit",
              "Pay Fee Online"
            ]}
          />

          <div>
            <h3 className="font-bold mb-4 text-[#2A3C7E]">
              Contact Us
            </h3>

            <p className="mb-4">
              AADYANT Global School, <br/> 11, Nelson Mandela Marg Vasant Kunj, New Delhi -110070, India
            </p>

            <div className="space-y-3">
              <ContactItem icon={<Phone size={16} />}>
                +91-9999-468-125
              </ContactItem>

              <ContactItem icon={<Mail size={16} />}>
                info@aadyant.com
              </ContactItem>

              <ContactItem icon={<MapPin size={16} />}>
                GPS Location
              </ContactItem>
            </div>
          </div>

        </div>

        {/* Desktop Bottom */}
        <div className="max-w-7xl mx-auto px-6 mt-16 mb-16 border-t pt-6 flex justify-between text-xs text-gray-600">
          <p>© 2026 AADYANT Global School.</p>
          <p>Website Designed and Developed by Hareram Singh</p>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="lg:hidden px-6 py-12 text-center">

        {/* School Name */}
        <h2 className="text-lg font-semibold mb-4">
          AADYANT Global School
        </h2>

        <p className="text-sm mb-2">
          AADYANT Global School, 11 –
          Nelson Mandela Marg Vasant Kunj, New Delhi -110070, India
        </p>

        <p className="mb-2">M: +91-9999-468-125</p>
        <p className="mb-2">E: info@aadyant.com</p>
        <p className="mb-6">L: GPS Location</p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 text-center mt-4">

          <FooterColumn
            title="Useful Links"
            links={[
              "About Us",
              "Admissions",
              "Work With Us",
              "Contact Us",
              "School Calendar",
              "Parent Partner Programme",
              "Privacy Policy"
            ]}
          />

          <FooterColumn
            title="Quick Links"
            links={[
              "Events",
              "Blogs",
              "Careers",
              "FAQs",
              "Year Book",
              "Parent Login"
            ]}
          />
        </div>



        {/* Social */}
        <p className="mb-4 mt-6 text-sm">Follow us on</p>

        <div className="flex justify-center gap-4 mb-6">
          <SocialIcon><Facebook size={16} /></SocialIcon>
          <SocialIcon><Youtube size={16} /></SocialIcon>
          <SocialIcon><Instagram size={16} /></SocialIcon>
          <SocialIcon><Linkedin size={16} /></SocialIcon>
        </div>

        <div className="border-t my-6"></div>

        <p className="text-xs mb-2">
          © 2026 AADYANT Global School.
        </p>
        <p className="text-xs mb-20">
          Website Designed and Developed by Hareram Singh
        </p>

      </div>

    </footer>
  );
}


/* ================= REUSABLE COMPONENTS ================= */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="font-bold mb-4 text-[#2A3C7E]">
        {title}
      </h3>

      <ul className="space-y-2">
        {links.map((link, index) => (
          <li
            key={index}
            className="hover:text-blue-800 cursor-pointer transition"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm hover:bg-[#0272A3] hover:text-white transition cursor-pointer">
      {children}
    </div>
  );
}

function ContactItem({ icon, children }) {
  return (
    <div className="flex items-center gap-3 hover:text-[#0272A3] transition cursor-pointer">
      <span className="text-[#0272A3]">{icon}</span>
      <span>{children}</span>
    </div>
  );
}