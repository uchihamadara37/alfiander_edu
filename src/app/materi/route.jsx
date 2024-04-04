import { Bitcoin, CircleDollarSign, Handshake } from "lucide-react";

const { NextResponse } = require("next/server");

export async function GET(request){
    return NextResponse.json(
    [
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
        
    ]
    ,
    {
        status: 200,
    })
}