import React, { useState } from "react";
import { H1 } from "./List.styled";
import { Task } from "./List.styled";
import { Button } from "./List.styled";
import { Input } from "./List.styled";
import { ButtonInput } from "./List.styled";
import { v4 as uuidv4 } from "uuid";

const tabInit = [
  {
    id: uuidv4(),
    title: "Wstać",
  },
];

function ShowList() {
  const [value, setValue] = useState("");
  const [tab, setTab] = useState(tabInit);

  const handleAdToDo = () => {
    if (value.trim() !== "") {
      const NewTask = { title: value, id: uuidv4() };
      setTab([...tab, NewTask]);
      setValue("");
    }
  };

  const removeTask = (id) => {
    const newTab = tab.filter((el) => el.id !== id);
    setTab(newTab);
  };
  return (
    <>
      <H1>Lista zadań</H1>
      <Input
        type="text"
        placeholder="Dodaj nowe zadanie..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonInput onClick={handleAdToDo}>Dodaj</ButtonInput>
      {tab.map((el) => (
        <Task key={el.id}>
          {el.title}
          <Button onClick={() => removeTask(el.id)}>X</Button>
        </Task>
      ))}
    </>
  );
}
export default ShowList;

// tasks jest stanem, który przechowuje listę zadań.

// setTasks jest funkcją do aktualizacji stanu.

// Funkcja removeTask jest wywoływana po kliknięciu przycisku Button i usuwa odpowiednie zadanie z listy na podstawie indeksu.
// Przycisk Button ma ustawiony atrybut onClick, który wywołuje funkcję removeTask z odpowiednim indeksem zadania do usunięcia.

//  Indeks ten jest przekazywany jako argument funkcji removeTask.

//  Klucz key jest dodany do elementu Task, aby zapewnić Reactowi unikalność elementów w liście.
//   Klucz ten powinien być unikalny w kontekście danej listy.
//    W tym przypadku używamy indeksu elementu w tablicy zadań jako klucza.
