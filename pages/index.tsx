import { Todo } from "@/pages/types";
import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import AddTodo from "./components/AddTodo";
import Todolist from "./components/TodoList";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(
      () =>
        (JSON.parse(localStorage.getItem("todos") as string) as Todo[]) || []
    );
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Todo Application</title>
        <meta name="description" content="Todo Application using Chakra UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-96x96.png" />
      </Head>
      <VStack p={4}>
        <IconButton
          aria-label="color mode"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          isRound={true}
          size="lg"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />
        <Heading
          mb="8"
          pb="8"
          fontWeight="extrabold"
          size="2xl"
          bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
          bgClip="text"
        >
          Todo Application
        </Heading>
        <AddTodo addTodo={addTodo} />
        <Todolist todos={todos} deleteTodo={deleteTodo} />
      </VStack>
    </>
  );
};

export default Home;
