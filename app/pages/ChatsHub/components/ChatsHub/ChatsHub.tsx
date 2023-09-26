import React, { useContext } from "react";
import { Button, FlatList, SafeAreaView, StyleSheet } from "react-native";

import { ThemeContext } from "@/shared/lib/providers/ThemeProvider";

import { useActions } from "../../../../shared/lib/hooks/useActions";
import { useTypedSelector } from "../../../../shared/lib/hooks/useTypedSelector";
import Chat from "../Chat/Chat";

const ChatsHub = () => {
  const chats = useTypedSelector((state) => state.chats);
  const { addChatHandler } = useActions();

  return (
    <SafeAreaView style={[styles.container]}>
      <Button
        title="Add chat"
        onPress={() =>
          addChatHandler({
            id: `${Math.random()}`,
            userName: "Boba",
            message: "Hallow",
          })
        }
      />
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <Chat userName={item.userName} message={item.message} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default ChatsHub;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 15,
  },
});
