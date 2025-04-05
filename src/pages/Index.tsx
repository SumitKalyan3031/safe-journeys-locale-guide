
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MountainSafety from '../components/MountainSafety';
import CoastalSafety from '../components/CoastalSafety';
import EmergencyContacts from '../components/EmergencyContacts';
import EmergencyPhrases from '../components/EmergencyPhrases';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <main>
        <MountainSafety />
        <CoastalSafety />
        <EmergencyContacts />
        <EmergencyPhrases />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
