
import Nav from "@/components/Nav";
import Icon from "@/components/icons/lucideIcon";
import { Button } from "@/components/ui/button";
import { Atom, CircuitBoard, Code2, Paintbrush2, Wrench, icons } from "lucide-react";
import Image from "next/image";
import { Bitcoin, CircleDollarSign, Handshake } from "lucide-react";
// import { useState } from "react";

async function getMateris(){
  try {
    const res = await fetch("http://localhost:3000/materi");

    if (!res.ok){
      throw new Error("gagal mengambil data");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  // const materis = await getMateris();
  const materis = [
    {
        materi   : "Ekonomi",
        description : "Menjelaskan berbagai hal yang berkaitan dengan kondisi, strategi, serta perubahan ekonomi dunia maupun lokal dari waktu ke waktu",
        format   : "Youtube video - Very Irwandi",
        silabus  : "7 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : CircleDollarSign
    },
    {
        materi   : "Business",
        description : "Membantu anda merancang bisnis dari dasar hingga menengah dengan terstruktur.",
        format   : "Youtube video - SB30",
        silabus  : "10 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : Handshake
    },
    {
        materi   : "Uang Fiat dan Crypto Currency",
        description : "lorem ipsum domet jangkrik van der witch or anything else you want.",
        format   : "Youtube video - Warren Buffet",
        silabus  : "9 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : Bitcoin
    },
    {
        materi   : "Fisika",
        description : "lorem ipsum domet jangkrik van der witch or anything else you want.",
        format   : "Youtube video - Fajrul Fx",
        silabus  : "8 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : Atom
    },
    {
        materi   : "Mechanic",
        description : "lorem ipsum domet jangkrik van der witch or anything else you want.",
        format   : "Youtube video - Beajar mekanik dari nol",
        silabus  : "8 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : Wrench
    },
    {
        materi   : "Elektronika",
        description : "lorem ipsum domet jangkrik van der witch or anything else you want.",
        format   : "Youtube video - ZX",
        silabus  : "8 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : CircuitBoard
    },
    {
        materi   : "Programmer",
        description : "lorem ipsum domet jangkrik van der witch or anything else you want.",
        format   : "Youtube video - ZX",
        silabus  : "8 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : Code2
    },
    {
        materi   : "Designer / Architecture",
        description : "lorem ipsum domet jangkrik van der witch or anything else you want.",
        format   : "Youtube video - ZX",
        silabus  : "8 kompetensi standar.",
        evaluasi : "5 evaluasi.",
        icon     : Paintbrush2
    },
    
  ]
  // console.log(materis);

  // const [belumLogin, setBelumLogin] = useState(false);


  return (
    <main className="flex min-h-screen flex-col items-center gap-20 px-24">
      <Nav belumLogin={false}/>
      <section className="py-15 flex flex-col gap-8 ">
        <h1 className="text-2xl md:text-4xl font-semibold md:leading-[50px] text-center"><span className="text-primary dark:text-blue-400 font-bold">Berpendidikan</span>,<br/>itu tidak harus <span className="text-primary dark:text-blue-400 font-bold">dari sekolah</span>.</h1>
        <p className="text-xl md:text-2xl text-muted-foreground text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio natus laborum ea, magnam deserunt quae.</p>
        <div className="flex gap-2 justify-center">
          < Button variant="default" className="text-lg">Mari belajar</Button>
        </div>

        {/* Materi */}
        <div className="grid grid-cols-3 justify-center py-5 gap-1">
          {materis.map((e, i) => (
            <div className=" p-3 flex flex-col md:flex-row gap-2 items-start rounded-md text-start md:mb-3" key={i}>
              
              <div className="md:basis-1 md:mr-5">
                <div className="h-16 w-16 flex justify-center items-center rounded-full bg-blue-100 text-primary">
                <e.icon className=''/>
                </div>
              </div>

              <div className="">
                <p className="text-center md:text-start text-lg md:text-xl  md:font-semibold pb-2">{e.materi}</p>
                <p className="text-muted-foreground pb-2.5">{e.description}</p>
                <p className="pb-2">{e.format}</p>
                <p className="text-primary font-semibold">{e.silabus}</p>
                <p className="text-muted-foreground">{e.evaluasi}</p>
              </div>

            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
