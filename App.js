
import React from "react";
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from "stream-chat-expo";

const chatClient = new StreamChat('f8wwud5et5jd');
const userToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidGhyb2JiaW5nLWxpbWl0LTMifQ.TVETnQ45Jsmskz7ZPhFeYgdvzWAL5z3gVps_7Q_iV4Q';

const user = {
  id: 'throbbing-limit-3',
  name: 'Throbbing limit',
  image:
    'https://getstream.io/random_png/?id=throbbing-limit-3&amp;name=Throbbing+limit',
};

chatClient.setUser(user, userToken);

class ChannelScreen extends React.Component {
  render() {
    const channel = chatClient.channel("messaging", "throbbing-limit-3");
    channel.watch();

    return (
      <SafeAreaView>
        <Chat client={chatClient}>
          <Channel channel={channel}>
            <View style={{ display: "flex", height: "100%" }}>
              <MessageList />
              <MessageInput />
            </View>
          </Channel>
        </Chat>
      </SafeAreaView>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <ChannelScreen />;
  }
}