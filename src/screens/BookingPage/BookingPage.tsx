import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { StarIcon, UserIcon } from "lucide-react";

export const BookingPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { salonId } = useParams();
  const [selectedDate, setSelectedDate] = useState("Mar 13");
  const [selectedTime, setSelectedTime] = useState("13:00");

  // Mock data for the selected salon
  const salon = {
    name: "Salon Élégance",
    address: "12 Rue de la Beauté, Paris",
    rating: 4.7,
    description: "Spécialistes de la coiffure et de la beauté à Paris. Découvrez une expérience unique dans un cadre chaleureux et élégant.",
    services: [
      { name: "Simple Beard Trim", duration: "10 min", price: "10€" },
      { name: "Classic Haircut", duration: "30 min", price: "25€" },
      { name: "Luxury Facial", duration: "50 min", price: "55€" },
    ],
  };

  const dates = ["Lun 12", "Mar 13", "Mer 14", "Jeu 15", "Ven 16"];
  const times = ["9:00", "10:00", "11:00", "13:00", "14:00", "15:00"];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center">
        <Button variant="ghost" className="p-2" onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </Button>
        <h1 className="text-2xl font-bold">STYLE</h1>
        <Button variant="ghost" className="p-2 bg-gray-900 rounded-lg">
          <UserIcon className="w-6 h-6 text-white" />
        </Button>
      </header>

      <div className="flex-1 overflow-y-auto">
        {/* Salon Image */}
        <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
          <span className="text-white text-lg">Image couverture du salon</span>
        </div>

        {/* Salon Info */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{salon.name}</h2>
            <div className="flex items-center">
              <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="text-lg font-semibold">{salon.rating}</span>
            </div>
          </div>
          <p className="text-gray-600 mt-1">{salon.address}</p>
          <p className="text-gray-700 mt-2">{salon.description}</p>
        </div>

        {/* Services */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Services disponibles</h3>
          {salon.services.map((service, index) => (
            <Card key={index} className="mb-2">
              <CardContent className="p-4 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.duration} - {service.price}</p>
                </div>
                <Button variant="secondary">Réserver</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Date Selection */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Choisir une date</h3>
          <div className="flex space-x-2">
            {dates.map((date) => (
              <Button
                key={date}
                variant={selectedDate === date ? "default" : "outline"}
                onClick={() => setSelectedDate(date)}
                className="flex-1"
              >
                {date}
              </Button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">Créneaux disponibles</h3>
          <div className="grid grid-cols-3 gap-2">
            {times.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Confirm Reservation Button */}
      <div className="p-4 bg-white">
        <Button 
          className="w-full bg-gray-900 text-white" 
          size="lg"
          onClick={() => navigate('/confirmation')}
        >
          Confirmer la réservation
        </Button>
      </div>
    </div>
  );
};
