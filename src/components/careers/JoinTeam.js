// pages/join-team.js
import Image from 'next/image';

export default function JoinTeam() {
  const countries = [
    { name: 'USA', image: '/assets/img/us.jpg' },
    { name: 'Israel', image: '/assets/img/il.jpg' },
    { name: 'Canada', image: '/assets/img/james-thomas.jpg' },
    { name: 'India', image: '/assets/img/julian-yu.jpg' },
    { name: 'United Kingdom', image: '/assets/img/marcin.jpg' },
  ];

  return (
    <>
    <div className="p-6 md:p-12 lg:p-16 container mx-auto" >
      <h2 className="text-6xl font-extrabold text-center text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12">
        Join the Lucerno team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {countries.map((country) => (
          <div key={country.name} className="relative group">
            <Image
              src={country.image}
              alt={country.name}
              layout="responsive"
              width={500}
              height={300}
              className="object-cover rounded-md"
            />
            <div className="mt-4 text-center">
              <span className="text-lg font-medium">{country.name}</span>
              <span className="text-orange-500 ml-2 ">→</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* content section */}
    <section className='container mx-auto mt-5 border-t border-gray-900 p-4'>
     <h3 className='text-4xl font-extrabold  text-gray-700 bg-clip-text bg-gradient-to-r from-pink-300 to-blue-300 mb-12'>Grow With Us.
     </h3>
     <p className='text-lg text-gray-800'>
     For over 30 years, Lucerno has been considered the leading kitchen surfaces brand in Israel and over 50 countries worldwide, using a large selection of the highest quality raw materials in breakthrough designs that set industry trends. Lucerno displays a strong passion for innovation, technological development, and groundbreaking production processes. We have gained worldwide recognition thanks to our unfailing commitment to safety, high standards of environmental protection, and steadfast interest in the wellbeing of our employees and customers.
     </p>
     <p className='text-lg text-gray-800 mt-3' >
     At Lucerno, we consistently put people first. Our employees, suppliers, and other partners are always our top priority. We believe that only together, through full cooperation, can we continue to strive for excellence and reach new heights.
     </p>
     <p className='text-lg text-gray-800 mt-3'>
     Lucerno Ltd. has been traded on Nasdaq (CSTE) since 2012. Our head office is located in Sdot Yam, Israel, while slab production processes are carried out in three facilities: two in Israel (Sdot Yam and Bar Lev), and one in Richmond Hill, Georgia, USA. We are active in many countries around the world, and sell our products through a network of subsidiaries and distributors.
     </p>
     <p className='text-lg text-gray-800 mt-3'>
     If you’re passionate about design and innovation, and want to be part of an exceptional team with room for growth in a career with a global, revolutionary, and market-leading company, Lucerno is for you. Your success here is set in stone. We will cultivate your talent to help you grow, develop, and advance both personally and professionally. Just send us your CV and we’ll get back to you as soon as possible.
     </p>
    </section>
    </>
  );
}
