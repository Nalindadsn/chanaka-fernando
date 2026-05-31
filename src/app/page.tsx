import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Phone, CheckCircle2, Quote } from "lucide-react";
import { GiJetFighter } from "react-icons/gi";
import { MdFastfood } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

import Nav from "./Nav";
import Hero from "./Hero";
import Qualities from "./Qualities";
import TechStack from "./TechStack";
import MoreWorks from "./MoreWorks";
import Products from "./Products";
import FoodMenuModel from "./Model";
import Emb from "@/components/testimonials/js";
import { CardGlow } from "@/components/ui/card-glow";
import { Button } from "@/components/ui/button";

const CHEF_CREDENTIALS = [
  "Personal chef for several private jet companies",
  "Ambassador for Ambassadors of Taste for the Global Gastronomy",
  "Member of The Chef’s Forum, inspiring future chefs",
  "Food consultant for the International Taste Institute",
  "Project Consultant for 3flavours project, London",
  "Executive Chef for Buddha Bar across 22 countries",
  "Head Chef for Chai Ki, Canary Wharf",
  "Head Chef for Del Aziz, Bermondsey",
  "Senior Sous Chef for Boisdale of Belgravia"
];

function Page() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-yellow-500/30">
      <Nav />
      <Hero />

      {/* Qualities Section */}
      <section className="w-full">
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-neutral-400">Loading experience...</div>}>
          <Qualities />
        </Suspense>
      </section>

      {/* Chef Statement Spotlight */}
      <section className="container max-w-5xl mx-auto my-20 px-4 hidden md:block">
        <CardGlow className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 bg-neutral-900/50 backdrop-blur border border-neutral-800 rounded-2xl overflow-hidden">
          <div className="relative shrink-0 overflow-hidden rounded-xl border border-neutral-800 group">
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-40 z-10" />
            <Image
              src="/chanaka-fernando1.png"
              alt="Chef Chanaka Fernando Portrait"
              width={320}
              height={480}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="relative space-y-6">
            <Quote className="w-12 h-12 text-yellow-500/20 absolute -top-4 -left-4 pointer-events-none" />
            <p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed italic relative z-10 pl-6">
              I care about my clients, and I enjoy the challenge of meeting their expectations. It’s my responsibility to meet their needs and to deliver the best of the best. As more people are health conscious these days, my clients are looking for healthy meals with fresh ingredients no matter what time of the day. Classic dishes can be tweaked, and I can introduce creative ideas to design specialist dishes.
            </p>
            <div className="border-t border-neutral-800 pt-4 pl-6">
              <h4 className="text-yellow-500 font-semibold tracking-wide uppercase text-sm">Chef Master Statement</h4>
            </div>
          </div>
        </CardGlow>
      </section>

      {/* Global Milestone / Announcement Feature */}
      <section className="w-full bg-gradient-to-r from-neutral-950 via-emerald-950/40 to-neutral-950 border-y border-emerald-900/30 my-24">
        <div className="container max-w-6xl mx-auto grid md:grid-cols-12 items-center gap-8 md:gap-12 py-16 px-4">
          <div className="md:col-span-5 relative group rounded-2xl overflow-hidden border-2 border-yellow-600/30 shadow-2xl">
            <div className="absolute inset-0 bg-emerald-950/20 mix-blend-color" />
            <Image
              src="/sri-lankan-capture.avif"
              alt="World Association of Master Chefs Sri Lankan Chapter Launch"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
            />
          </div>

          <div className="md:col-span-7 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-yellow-500/80 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
              Global Launch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Sri Lankan Capture<span className="text-yellow-500">.</span>
            </h2>
            <p className="text-neutral-300 font-light leading-relaxed text-lg">
              Dear all,<br /><br />
              We are excited to announce that the World Association of Master Chefs Sri Lankan Chapter will be launching on May 29th, 2023. This is an incredible milestone for our organization and its members, who share a passion for culinary excellence and innovation.
            </p>
            <div className="pt-2">
              <Link
                href="/posts/sri-lankan-capture"
                className="inline-flex items-center gap-2 font-semibold text-yellow-500 hover:text-yellow-400 transition-colors group"
              >
                View Post 
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Core Service: Private Jet Catering */}
      <section className="container max-w-6xl mx-auto my-24 px-4">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 md:order-first order-last">
            <CardGlow className="p-8 md:p-10 bg-neutral-900/30 border border-neutral-800 rounded-2xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <GiJetFighter className="w-32 h-32 text-yellow-500" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-yellow-500">
                  <MdFastfood className="w-8 h-8" />
                  <span className="text-sm font-bold tracking-widest uppercase">Premium Experiences</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                  3Flavours Jet Catering
                </h2>
                <h3 className="text-lg font-medium text-yellow-500/90">
                  In-flight Private Jet Elite Gastronomy
                </h3>
                <p className="text-neutral-300 font-light leading-relaxed pt-2">
                  When your clients are flying at 30,000 feet, they’ll want a personalised level of in-flight private jet catering that’s always on time and meets any type of dietary requirement. <br /><br />
                  We offer a flexible and reactive 24/7 service. Whether it’s night or day, a leisure or business trip, our prestigious, experienced chefs have the ability to predict the culinary needs of your clients. They know how to plan ahead for satisfying meals and pre-touchdown appetisers.
                </p>
                <div className="pt-6 flex items-center justify-between border-t border-neutral-800/80 mt-6">
                  <Link
                    href="/posts/3flavours-jet-catering"
                    className="inline-flex items-center gap-2 font-medium text-neutral-200 hover:text-white transition-colors group"
                  >
                    Explore Journey 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <div className="relative flex items-center">
                    <div className="absolute -left-8">
                      <div className="loader opacity-70"></div>
                    </div>
                    <FoodMenuModel />
                  </div>
                </div>
              </div>
            </CardGlow>
          </div>
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-3xl" />
              <Image
                src="/private-jet2.png"
                alt="Luxurious Private Jet In-flight Dish Presentation"
                width={450}
                height={450}
                className="relative z-10 object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Block */}
      <section className="w-full bg-neutral-900/40 border-y border-neutral-900 py-24 px-4 relative overflow-hidden">
        <div className="absolute -top-10 -left-10 opacity-5 pointer-events-none">
          <PiUsersThreeFill className="w-56 h-56 text-white" />
        </div>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="text-4xl font-black tracking-tight text-white">Guest Testimonials</h2>
          <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full" />
          <p className="text-neutral-400 font-light text-lg">
            What our global customers and premium clients say about the execution
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <Emb />
        </div>
      </section>

      {/* Secondary Dynamic Elements */}
      <div className="space-y-12 my-12">
        <MoreWorks />
        <Products />
      </div>

      {/* Unified Enterprise Call to Action & Credentials */}
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-950 border-t border-neutral-800">
        <div className="container max-w-6xl mx-auto py-16 px-4 lg:py-24 grid md:grid-cols-12 items-center gap-12">
          <div className="md:col-span-4 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-full flex flex-col justify-center items-center shadow-xl ring-4 ring-amber-500/20 group hover:ring-amber-500/40 transition-all">
              <Calendar className="w-8 h-8 text-neutral-950 mb-1 transition-transform group-hover:scale-110" />
              <span className="text-[10px] font-bold tracking-widest text-neutral-950 uppercase">Booking</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Schedule Private Consultation</h3>
              <p className="text-sm text-neutral-400 max-w-[240px]">Direct alignment for events, custom culinary designs, and private charters.</p>
            </div>
            <Button asChild size="lg" className="bg-yellow-500 text-neutral-950 hover:bg-yellow-400 font-bold px-8 shadow-lg shadow-yellow-500/10">
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Contact Me
              </Link>
            </Button>
          </div>

          <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-neutral-800 pt-8 md:pt-0 md:pl-12">
            <h3 className="text-2xl font-bold text-white mb-6 tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-full" />
              Professional Track Record & Credentials
            </h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {CHEF_CREDENTIALS.map((credential, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-300 text-sm font-light leading-snug">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{credential}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;
