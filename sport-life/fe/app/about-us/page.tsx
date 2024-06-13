'use client';

import Button from "@/components/buttons/buttons";
import LinkA from "@/components/linkA";
import { Show } from "@/components/show";
import { PageText } from "@/model/page-text";
import { useState } from "react";

const textContent: Record<Language, PageText> = {
  it: {
    language: "it",
    title: "Cosa stai vedendo?",
    firstDescription: "Questa è la pagina di ",
    secondDescription: "Questo è un piccolo esercizio per il mio portofolio!"
  },
  en: {
    language: "en",
    title: "What are you looking at?",
    firstDescription: "This is the page of ",
    secondDescription: "This is a small exercise for my portfolio!"
  }
};

export default function AboutUs() {

  const [language, setLanguage] = useState<Language>("it"); 
  const pageText = textContent[language];

  return (
    <div className="flex flex-wrap">
      <img className="w-1/2 p-4" src='/img/logo.jpeg' alt="Logo"/>
      <div className="w-1/2 p-4 flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold mb-4">{pageText.title}</h1>
        <p className="text-lg text-center max-w-md">{pageText.firstDescription}
          <LinkA href="https://www.linkedin.com/in/alessandro-oppedisano/" label="Alessandro Oppedisano!"></LinkA></p>
        <p className="text-lg text-center max-w-md mb-5">{pageText.secondDescription}</p>
        <Show when={language === 'it'}><Button onClick={() => setLanguage("en")} label="Change Language" /></Show>
        <Show when={language === 'en'}><Button onClick={() => setLanguage("it")} label="Cambia lingua" /></Show>
      </div>
    </div>
  );
}
