export default function THead({ name }: { name: string }) {
  return (
    <th
      scope="col"
      className="py-3.5 pl-4 pr-3 text-left font-sans text-sm font-normal text-gray sm:pl-0"
    >
      {name}
    </th>
  );
}
