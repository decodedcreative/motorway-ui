import { useState } from "react";
import { useForm } from "react-hook-form";
import Form from "./components/Form/Form";
import {
  Button,
  FormControl,
  Slider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/lab";

const UserForm = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const [date, setDate] = useState(new Date());

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <FormControl required={true}>
          <TextField
            variant="outlined"
            label="First Name"
            fullWidth
            error={errors.firstName === true}
            helperText={errors.firstName && "First name is required"}
            {...register("firstName", { required: true })}
          />
        </FormControl>
        <FormControl required={true}>
          <TextField
            variant="outlined"
            label="Last Name"
            fullWidth
            error={errors.lastName === true}
            helperText={errors.lastName && "Last name is required"}
            {...register("lastName", { required: true })}
          />
        </FormControl>
        <FormControl required={true}>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            error={errors.email === true}
            helperText={errors.email && "Email address is required"}
            {...register("email", { required: true })}
          />
        </FormControl>
        <FormControl>
          <DatePicker
            label="Date Of Birth"
            renderInput={(params) => <TextField {...params} />}
            onChange={(newDate) => {
              setDate(newDate);
            }}
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            label="Favourite Colour"
            type="color"
            fullWidth
            {...register("color")}
          />
        </FormControl>
        <FormControl>
          <Typography gutterBottom>Salary</Typography>
          <Slider
            defaultValue={30000}
            step={10000}
            min={10000}
            max={150000}
            valueLabelDisplay="auto"
            {...register("salary")}
          />
        </FormControl>
        <Button type="submit">Submit</Button>
      </Stack>
    </Form>
  );
};

export default UserForm;
