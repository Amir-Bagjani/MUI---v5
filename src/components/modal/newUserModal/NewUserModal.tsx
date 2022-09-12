import React from 'react'
import * as yup from "yup";
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextField, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { BasicModal, CommonButton } from '../../common';
import { phoneNumberRegex } from '../const';
import { IUser as IUserForm } from '../../../models';


interface IProps {
  open: boolean;
  onClose: () => void;
  addNewUser: (user: IUserForm) => void;
}


const inputStyle = {
  '& .MuiInputBase-input': { fontSize: "0.875rem" },
  '& .MuiFormLabel-root': { fontSize: "0.83rem" },
}

const validationSchema = yup.object().shape({
  email: yup.string().email("Email is invalid.").required("Email is required."),
  userId: yup.string().min(6, "User ID must be atleast 6 characters").required("User ID is required."),
  phoneNumber: yup.string().required("Phone number is required.").matches(phoneNumberRegex, "Phone number is not valid"),
})

export const NewUserModal: React.FC<IProps> = ({ open, onClose, addNewUser }) => {

  const { handleSubmit, control, reset, formState: { errors } } = useForm<IUserForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      email: "",
      phoneNumber: "",
      userId: ""
    }
  })

  const content = () => {

    const submitHandler: SubmitHandler<IUserForm> = (data) => {
      addNewUser(data);
      reset({})
      onClose()
    }
  
    return (
      <Box component="form" autoComplete="off" onSubmit={handleSubmit(submitHandler)}>
        <Box sx={{ mt: 2, display: "flex", gap: 2, flexDirection: "column" }}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                variant="outlined"
                size='small'
                fullWidth
                sx={inputStyle}
                error={errors?.email ? true : false}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Phone number"
                variant="outlined"
                size='small'
                fullWidth
                sx={inputStyle}
                error={errors?.phoneNumber ? true : false}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />
          <Controller
            name="userId"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="User ID"
                variant="outlined"
                size='small'
                fullWidth
                sx={inputStyle}
                error={errors?.userId ? true : false}
                helperText={errors.userId?.message}
              />
            )}
          />
        </Box>
        <Box sx={{ mt: 4, display: "flex", gap: 1, justifyContent: "flex-end" }}>
          <CommonButton type="reset" variant="outlined" color="error" onClick={onClose}>cancel</CommonButton>
          <CommonButton type='submit' variant='contained' >submit</CommonButton>
        </Box>
      </Box>
    )
  }


  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New user"
      subTitle="Fill out inputs and hit 'submit' button."
      content={content()}
    />
  )
}


