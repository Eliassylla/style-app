import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Moon, Sun, Globe, Lock, FileText, Trash2, User
} from 'lucide-react';
import { Switch } from "../../components/ui/switch";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../components/ui/accordion";

export const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 p-4 flex items-center justify-between relative">
        {/* Language Dropdown in Header */}
        <Accordion type="single" collapsible>
          <AccordionItem value="language-header">
            <AccordionTrigger className="p-2">
              <Globe className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </AccordionTrigger>
            <AccordionContent className="absolute top-full left-4 mt-2 bg-white dark:bg-gray-800 border rounded-md shadow-md p-2 space-y-1 text-sm z-50">
              <p className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">English</p>
              <p className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">Français</p>
              <p className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">Español</p>
              <p className="hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-1 rounded">العربية</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <h1 className="text-2xl font-bold text-center absolute left-1/2 transform -translate-x-1/2">STYLE</h1>

        <Switch
          checked={isDarkMode}
          onCheckedChange={setIsDarkMode}
          className=""
          icon={isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
        />
      </header>

      <main className="flex-1 p-4 space-y-4">
        {/* Mon Profil */}
        <Link to="/user">
          <Card className="w-full">
            <CardContent className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium">Mon Profil</span>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Privacy Settings */}
        <Card className="w-full">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Lock className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Privacy Settings</span>
            </div>
          </CardContent>
        </Card>

        {/* Terms of Use */}
        <Card className="w-full">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <FileText className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400" />
              <span className="text-sm font-medium">Terms of Use & Privacy Policy</span>
            </div>
          </CardContent>
        </Card>

        {/* Delete Account */}
        <Card className="w-full bg-red-600">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <Trash2 className="h-5 w-5 mr-3 text-white" />
              <span className="text-sm font-medium text-white">Delete Account</span>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};
