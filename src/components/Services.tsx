import { FaReact, FaNodeJs } from "react-icons/fa"; 
import { SiNextdotjs, SiMongodb,SiPostgresql ,SiMysql} from "react-icons/si"; 

const Services = () => {
  const services = [
    {
      icon: (
        <div className= "flex gap-3 items-center">
          <FaReact className="text-[#4CB7F5] text-2xl" />
          <SiNextdotjs className="text-[#4CB7F5] text-2xl" />
        </div>
      ),
      title: "Front-End Development",
      description: (
        <>
          I build responsive user interfaces with React.
          <br />
          I integrate Next.js for server-side rendering.
          <br />
          Styling is done with Tailwind CSS for modern design.
        </>
      ),
    },
    {
      icon: <FaNodeJs className="text-[#4CB7F5] text-2xl" />,
      title: "Back-End Development",
      description: (
        <>
          I create APIs and server logic with Node.js.
          <br />
          I use Express and NestJS for scalable back-ends.
          <br />
          Security and performance are my priority.
        </>
      ),
    },
    {
      icon:(
        <div className="flex gap-3 items-center">
          <SiPostgresql className="text-[#4CB7F5] text-2xl" />
          <SiMongodb className="text-[#4CB7F5] text-2xl" />
          <SiMysql className="text-[#4CB7F5] text-2xl" />
        </div>
      ),
      title: "Database Management",
      description: (
        <>
          I work with SQL and NoSQL databases.
          <br />
          Experience with PostgreSQL, MongoDB, Firebase ,supabase.
          <br />
          Efficient data modeling and querying is ensured.
        </>
      ),
    },
  ];

  return (
    <section id="services" className="text-white  w-full scroll-mt-[80px]">
     <div className="container">
<h1 className="font-bold text-4xl text-center">
        My <span className="text-[#4CB7F5]">Services</span>{" "}
      </h1>
     
        
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
            <div
            key={index}
            className="bg-[#0f112f] p-5 rounded-xl shadow-lg hover:shadow-[#4CB7F5]/50 transition-shadow flex flex-col hover:scale-105 transition-transform items-start gap-4"
            >
            <h1 className="flex-shrink-0">{service.icon}</h1>
            <div>
              <h3 className="text-[#4CB7F5] font-bold mb-1">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
     </div>
      
    </section>
  );
};

export default Services;
