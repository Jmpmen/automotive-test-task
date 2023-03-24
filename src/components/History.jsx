function OwnerHistory( { date, title } ){
    return (
  <li className="ml-4">
    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white" />
    <time className="mb-1 text-sm font-normal leading-none text-gray-900">
      {date}
    </time>
    <p className="text-base font-normal text-gray-900">
      {title}
    </p>
  </li>

    )
}

export default OwnerHistory