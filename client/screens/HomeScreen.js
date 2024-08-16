import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import CompleteProfile from "../components/CompleteProfileComponent";
import TempratureComponent from "../components/TempratureComponent";
import PriceUpdateComponent from "../components/PriceUpdateComponent";
import WhatsAppComponent from "../components/WhatsAppUpdatesComponent";
import ViewMoreComponent from "../components/ViewMoreComponent";
import CropDoctorComponent from "../components/CropDoctorComponent";
import ExpertArticleComponent from "../components/ExoertArticleComponent";
import NewsComponent from "../components/NewsComponent";
import GovtSchemeComponent from "../components/GovtSchemeComponent";
import EventsReminderComponent from "../components/EventsReminderComponent";
import AddFarmComponent from "../components/AddFarmComponent";
import InviteFriendComponent from "../components/InviteFriendComponent";
import FeedbackComponent from "../components/FeedbackComponent";

export default function HomeScreen(){
  const navigation = useNavigation();
    return(
        <SafeAreaView className="bg-gray-100 flex-1">
       <View className=" bg-white px-4 py-4 border-gray-200 border-b-2">
        <View className="flex flex-row items-center justify-between pt-1 ">
          <Text className="text-xl  font-semibold">Welcome to K-Mart</Text>
        </View>
      </View>
        <View className="flex-1">
          <ScrollView>
          <CompleteProfile/>
          
          <TempratureComponent/>


          <ViewMoreComponent/>
          <PriceUpdateComponent/>

          <WhatsAppComponent/>

          <CropDoctorComponent/>

          <ExpertArticleComponent/>

          <NewsComponent/>

          <GovtSchemeComponent/>

          <EventsReminderComponent/>

          <AddFarmComponent/>

          <InviteFriendComponent/>

          <FeedbackComponent/>
          </ScrollView>
        </View>
        <Footer className=" absolute bottom-0"/>
      </SafeAreaView>
    )
}

