import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required(),
  bio: yup.string().required(),
  category: yup.array().min(1),
  languages: yup.array().min(1),
  fee: yup.string().required(),
  location: yup.string().required(),
});

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("Form Submitted", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-lg">
      <input
        {...register("name")}
        placeholder="Name"
        className="w-full border p-2 rounded"
      />
      <p className="text-red-500">{errors.name?.message}</p>

      <textarea
        {...register("bio")}
        placeholder="Bio"
        className="w-full border p-2 rounded"
      />

      <select {...register("fee")} className="w-full border p-2 rounded">
        <option value="">Select Fee Range</option>
        <option value="1000-5000">₹1,000–₹5,000</option>
        <option value="5000-10000">₹5,000–₹10,000</option>
        <option value="5000-10000">₹10,000–₹20,000</option>
      </select>

      <input
        {...register("location")}
        placeholder="Location"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
