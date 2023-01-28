import { Todo } from "@/pages/types";
import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useState } from "react";

type Props = {
  addTodo: (todo: Todo) => void;
};

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [content, setContent] = useState<string>("");

  const toast = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
    const todo: Todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mb="8">
        <Input
          variant="filled"
          placeholder="task name"
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
