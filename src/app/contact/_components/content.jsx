import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, MapPinned, PhoneCall } from "lucide-react";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-center">
              <div className="p-3 bg-[#215aff] rounded-full">
                <Clock className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-lg md:text-xl xl:text-2xl font-bold text-center mt-3">
              Opening Hours
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-600 text-sm md:text-base xl:text-lg">
         <div className="flex justify-between">
            <h3>Mon-Sat</h3>
            <h3>10 AM - 6 PM</h3>
         </div>

         <div className="flex justify-between">
             <h3>Sunday</h3>
            <h3>Closed</h3>
         </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-center">
              <div className="p-3 bg-[#215aff] rounded-full">
                <MapPinned className="h-10 w-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-lg md:text-xl xl:text-2xl font-bold text-center mt-3">
              Address
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm md:text-base xl:text-lg">
              HOUSE NO 41-42 2ND FLOOR BLK-B PKT 5 SEC 5 ROHINI LANDMARK NEAR
              RITHALA MODE DELHI 110085
            </p>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card className="h-full">
          <CardHeader>
            <div className="flex justify-center">
              <div className="p-4 bg-[#215aff] rounded-full">
                <PhoneCall className="h-8 w-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-lg md:text-xl xl:text-2xl font-bold text-center mt-3">
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm md:text-base xl:text-lg">
              Phone: +91-8851597933
            </p>
            <p className="text-gray-600 text-sm md:text-base xl:text-lg">
              Email: info@moderndreamfoundation.com
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
