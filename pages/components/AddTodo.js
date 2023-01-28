import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [content, setContent] = useState("");

  const toast = useToast();

  function handleSubmit(e) {
    console.log("!!");

    e.preventDefault();

    if (!content) {
      toast({
        title: "No content",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    console.log(content);
    const todo = {
      id: nanoid(),
      body: content,
    };
    console.log(todo);
    addTodo(todo);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="learning chakraui with todo app"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          AddTodo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
