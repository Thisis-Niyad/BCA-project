import * as yup from "yup"

const phoneRegExp = /^(\+91|91|0)?[6-9]\d{9}$/;

export const ProfileSchema = yup.object({
  Name: yup.string().required("required"),
  email: yup.string().email("invalid E-mail").required("required"),
  DOB: yup.date().typeError("Invalid date").required("Date of birth is required"),
  gender: yup.string().required("Gender is required"),
  phone: yup.string().matches(phoneRegExp, "phone.no is not valid").required("required"),
  state: yup.string().required("required"),
  town: yup.string().required("required"),
  pin: yup.string().matches(/^\d{6}$/, "Enter a valid pin").required("required"),
  address: yup.string().required("required"),
  ProfileImg: yup.mixed(),
});

export const reportSchema = yup.object().shape({
  Name: yup.string().required("required"),
  email: yup.string().email("invalid E-mail").required("required"),
  phone: yup.string().matches(phoneRegExp, "phone.no is not valid").required("required"),
  title: yup.string().required("required"),
  complaintDetails: yup.string().required("required")
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("invalid E-mail").required("required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .matches(/[A-Z]/, "Must contain one uppercase letter")
    .matches(/[a-z]/, "Must contain one lowercase letter")
    .matches(/[0-9]/, "Must contain one number")
    .matches(/[@$!%*?&]/, "Must contain one special character"),
});

export const SignupSchema = yup.object().shape({
  Name: yup.string().required("required"),
  email: yup.string().email("invalid E-mail").required("required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .matches(/[A-Z]/, "Must contain one uppercase letter")
    .matches(/[a-z]/, "Must contain one lowercase letter")
    .matches(/[0-9]/, "Must contain one number")
    .matches(/[@$!%*?&]/, "Must contain one special character"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
});


export const ArtistRegisterationSchema = yup.object({
  Name: yup.string().required("required"),
  email: yup.string().email("invalid E-mail").required("required"),
  DOB: yup.date().typeError("Invalid date").required("Date of birth is required"),
  Gender: yup.string().required("Gender is required"),
  phoneNo: yup.string().matches(phoneRegExp, "phone.no is not valid").required("required"),
  state: yup.string().required("required"),
  town: yup.string().required("required"),
  pin: yup.string().matches(/^\d{6}$/, "Enter a valid pin").required("required"),
  address: yup.string().required("required"),
  artPortfolioLinks: yup.array().of(
    yup.string().url("Invalid URL").required("Link cannot be empty")
  ).min(1, "At least one link is required"),
  certificate: yup.mixed()
    .required("Certificate is required"),

  workImages: yup.array()
    .min(5, "At least 5 work images are required")
    .required("Work images are required")
    .test("fileType", "Only image files are allowed", (value) => {
      if (!value || value.length === 0) return true;
      return value.every((file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          file.type
        )
      );
    })
});