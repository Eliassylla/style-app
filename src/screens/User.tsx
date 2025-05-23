import React from 'react';
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Switch } from "../components/ui/switch";
import { LogOut, Lock, User as UserIcon } from 'lucide-react';

export const User: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 flex justify-center items-center shadow-sm">
        <h1 className="text-2xl font-bold text-center">STYLE</h1>
      </header>

      <main className="flex-1 p-4 space-y-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center mb-4">
            <UserIcon className="w-12 h-12 text-gray-600" />
          </div>
          <h2 className="text-2xl font-bold">Camille Laurent</h2>
          <p className="text-gray-600">camille.laurent@email.com</p>
        </div>

        <Card>
          <CardContent className="space-y-4 p-4">
            <div>
              <label className="text-sm font-medium">Phone Number</label>
              <div className="flex items-center mt-1">
                <input type="tel" value="+33 6 12 34 56 78" className="flex-grow p-2 border rounded-l-md" readOnly />
                <Button variant="outline" className="rounded-l-none"><UserIcon className="w-4 h-4" /></Button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <div className="flex items-center mt-1">
                <input type="email" value="camille.laurent@email.com" className="flex-grow p-2 border rounded-l-md" readOnly />
                <Button variant="outline" className="rounded-l-none"><UserIcon className="w-4 h-4" /></Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Notifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Appointment Reminders</span>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span>Promotions</span>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Security</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start">
                <Lock className="w-4 h-4 mr-2" />
                Change Password
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <UserIcon className="w-4 h-4 mr-2" />
                Manage Login Methods
              </Button>
            </div>
          </CardContent>
        </Card>

        <Button variant="destructive" className="w-full">
          <LogOut className="w-4 h-4 mr-2" />
          Log Out
        </Button>
      </main>
    </div>
  );
};
