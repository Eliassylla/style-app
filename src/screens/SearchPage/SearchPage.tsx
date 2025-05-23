import React from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { StarIcon, HomeIcon, SearchIcon, CalendarIcon, UserIcon } from "lucide-react";

export const SearchPage = (): JSX.Element => {
  const navigate = useNavigate();
  const salons = [
    { name: "Salon Élégance", address: "12 Rue de la Beauté, Paris", services: "Coiffure, Beauté", rating: 4.7, price: "€€" },
    { name: "Studio Chic", address: "8 Avenue Mode, Lyon", services: "Maquillage", rating: 4.5, price: "€" },
    { name: "L'Atelier Beauté", address: "22 Boulevard Style, Marseille", services: "Barbier", rating: 4.9, price: "€€€" },
    { name: "Beauté Zen", address: "3 Rue Relax, Lille", services: "Spa, Massage", rating: 4.2, price: "€" },
    { name: "Les belles", address: "5 Rue Relax, Lille", services: "Spa, Massage", rating: 4.2, price: "€" },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <Button variant="ghost" className="p-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Button>
        <h1 className="text-2xl font-bold">STYLE</h1>
        <Button variant="ghost" className="p-2 bg-gray-900 rounded-lg">
          <UserIcon className="w-6 h-6 text-white" />
        </Button>
      </header>

      {/* Search Input */}
      <div className="p-4">
        <div className="relative">
          <Input
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
            placeholder="coiffure"
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Button variant="ghost" className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 text-gray-400">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-around px-4 mb-4">
        <Button variant="outline" className="flex items-center gap-2 text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Distance
        </Button>
        <Button variant="outline" className="flex items-center gap-2 text-gray-600">
          <StarIcon className="w-5 h-5" />
          Note
        </Button>
        <Button variant="outline" className="flex items-center gap-2 text-gray-600">
          <CalendarIcon className="w-5 h-5" />
          Disponibilité
        </Button>
      </div>

      {/* Salon List */}
      <div className="flex-1 overflow-y-auto px-4">
        {salons.map((salon, index) => (
          <Card 
            key={index} 
            className="mb-4 bg-white cursor-pointer"
            onClick={() => navigate(`/booking/${index + 1}`)}
          >
            <CardContent className="p-4 flex">
              <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center mr-4">
                <span className="text-xs text-white text-center">Aperçu Salon</span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{salon.name}</h3>
                  <div className="flex items-center">
                    <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm">{salon.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{salon.address}</p>
                <div className="flex items-center mt-2">
                  <span className="text-xs bg-gray-200 rounded px-2 py-1 mr-2">{salon.price}</span>
                  <span className="text-xs text-gray-500">{salon.services}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom Navigation removed */}
    </div>
  );
};
