import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../components/Button";
import { Quote } from "../components/Quote";
import { RootState } from "../store/rootReducer";
import { inAddictionChange } from "../store/users/usersActions";

interface IInAddiction {}
export const InAddiction: React.FC<IInAddiction> = () => {
  const inAddiction = useSelector(
    (state: RootState) => state.users.inAddiction
  );
  const dispatch = useDispatch();
  return (
    <>
      <Quote author="Kirill" marginBottom="60px">
        Каждый год в россии около 5000 людей в возрасте до 21 года умирают в
        ситуациях, связанных с алкоголем, — например, в авариях, бытовых
        убийствах, в результате отравления и других подобных травм.
      </Quote>
      <Button
        onClick={() => {
          dispatch(inAddictionChange(inAddiction));
        }}
        type="smallText"
      >
        Отказаться от алкоголя
      </Button>
    </>
  );
};
