export function StatusCard() {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl shadow-md">
        <div><h2 className="text-xl font-semibold mb-4">Status</h2><span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span></div>  
      <ul className="text-neutral-300 space-y-1">
       
        <li className="flex items-center gap-2">
          Available for freelance
        </li>
        <li className="flex items-center gap-2">
          Available for full-time
        </li>
        <li className="flex items-center gap-2">
          Available for contract
        </li>
      </ul>
    </div>
  );
}