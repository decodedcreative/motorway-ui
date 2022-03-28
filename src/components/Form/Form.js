import { Container } from "@mui/material";
import * as styles from "./FormStyles";

const Form = ({ children, ...props }) => {
  return (
    <styles.Form {...props}>
      <Container maxWidth="sm">{children}</Container>
    </styles.Form>
  );
};

export default Form;
