import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    title: "Promote Health & Well-being",
    description:
      "Promoting health and well-being means ensuring that every individual has access to quality healthcare, nutritious food, clean water, and opportunities for physical and mental wellness.",
  },
  {
    title: "Empower Women, Youth & Marginalized Communities",
    description:
      "We empower women, youth, and marginalized communities by equipping them with skills,opportunities, and confidence to lead change in their lives and communities.",
  },
  {
    title: "Encourage Sustainable & Organic Living",
    description:
      "We promote eco-friendly practices, organic farming, and sustainable lifestyles. By encouraging green choices, we support healthier people and a healthier planet.",
  },
  {
    title: "Education & Skill Development",
    description:
      "We are committed to empowering individuals through quality education and practical skill development. By providing access to learning resources, vocational training, and capacity-building programs, we aim to equip children, youth, and women with the knowledge and tools needed for self-reliance and long-term success.",
  },
  {
    title: "Promote Indian Culture & Arts",
    description:
      "Our NGO is dedicated to preserving and promoting the rich heritage of Indian culture and arts.Through workshops, cultural events, and training programs, we provide a platform for traditional art forms, folk music, dance, and crafts to thrive.",
  },
  {
    title: "Strengthen Communities & Social Welfare",
    description:
      "We strive to build stronger, more resilient communities by addressing social challenges and promoting inclusive development. Through welfare programs, community outreach, and support services, we work to uplift marginalized groups, ensure access to basic needs.",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-[#04ce78] text-center mb-10">
        What We Do
      </h1>
      <p className="text-sm md:text-base xl:text-lg text-gray-600">
        At Modern Dream Foundation, we are committed to transforming lives and
        building a brighter future for underprivileged communities through
        impactful programs in education, healthcare, skill development, women
        empowerment, and environmental sustainability.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.map((item, idx) => {
          return (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg md:text-xl xl:text-2xl text-center text-[#000d61] font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base xl:text-lg text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
