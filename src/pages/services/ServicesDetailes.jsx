import React from "react";
import img1 from "../../assets/ServicesImg1.png";
import img2 from "../../assets/ServicesImg2.png";
import img3 from "../../assets/ServicesImg3.png";
import img4 from "../../assets/ServicesImg4.png";
import img5 from "../../assets/ServicesImg5.png";

const services = [
  {
    id: 1,
    title: "EPC (Engineering, Procurement & Construction) ",
    description:
      "At EWIG, our turnkey EPC (Engineering, Procurement & Construction) solutions offer a seamless, end-to-end approach to solar project execution. From initial site surveys and feasibility assessments to custom system design, procurement of high-quality components, professional installation, and final commissioning — we handle it all with precision and expertise. Our focus on quality, safety, and timely execution ensures that your solar power system delivers exceptional performance and long-term reliability. ",
    image: img1,
  },
  {
    id: 2,
    title: "COMMERCIAL SOLUTIONS",
    description:
      "At EWIG, our commercial solar solutions are designed to help businesses significantly reduce electricity costs, achieve energy independence, and meet their sustainability goals. Whether it's a factory, educational institution, hospital, or office complex, we provide smart, scalable systems tailored to your specific energy requirements. By adopting our commercial solar systems, organizations benefit from long-term financial savings, a fast return on investment, and compliance with environmental regulations. Moreover, transitioning to renewable energy enhances your brand’s reputation as an environmentally responsible business, creating lasting value beyond just energy savings.",
    image: img2,
  },
  {
    id: 3,
    title: "SOLAR ROOFTOP PROJECT ",
    description:
      "At EWIG, we specialize in rooftop solar projects tailored for both ON-Grid and OFF-Grid applications. Whether you're in a bustling city or a remote village, our solutions are designed to bring clean, sustainable energy to your space. ON-Grid systems allow you to export surplus power back to the grid and enjoy benefits like net metering, while OFF-Grid systems ensure uninterrupted power supply in areas with limited or no grid access. From residential rooftops to industrial buildings and rural setups, our decentralized solar solutions are crafted to deliver maximum efficiency and energy independence.",
    image: img3,
  },
  {
    id: 4,
    title: "GOVERNMENT APPROVAL  ",
    description:
      "To ensure your solar system performs at its best year after year, EWIG offers comprehensive Operations & Maintenance (O&M) services. Our dedicated team provides regular system inspections, cleaning, performance audits, and preventive maintenance to avoid potential issues. We also handle troubleshooting, component replacements, and real-time monitoring to maximize your system’s uptime and output. With EWIG’s O&M support, you can be confident that your solar assets are always operating at peak performance, giving you the returns and reliability you deserve.",
    image: img4,
  },
  {
    id: 5,
    title: "O&M (Operations & Maintenance) ",
    description:
      "Navigating the solar regulatory landscape can be complex, but with EWIG’s Government Approval & Compliance support, we make it simple for you. Our team takes care of all the necessary documentation and approvals required by local DISCOMs and governing bodies. From net metering applications to solar subsidy claims (where applicable), we ensure your project meets every legal and procedural requirement. With our expert handling of permits and paperwork, going solar becomes a smooth, stress-free process.",
    image: img5,
  },
];

const ServicesDetailes = () => {
  return (
    <div className="px-4 sm:px-6 md:px-16 lg:px-20 py-10 space-y-20">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 leading-tight">
        Powering a Greener Future with EWIG’s End-to-End Solar Solutions
      </h2>

      {services.map((service, index) => (
        <div
          key={service.id}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "" : "md:flex-row-reverse"
          } items-center gap-8 md:gap-12`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl w-full h-full max-h-[400px] object-cover shadow-md"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#101828] leading-snug">
              {service.title}
            </h2>
            <p className="text-gray-700 font-normal text-sm sm:text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesDetailes;
