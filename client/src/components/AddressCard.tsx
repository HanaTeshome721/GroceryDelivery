import React from 'react'
import type { Address } from '../types'
import { CheckIcon, MapPinIcon, PencilIcon, TrashIcon } from 'lucide-react';

interface AddressCardProps {
    addr: Address;
    onEditHandler: (addr: Address) => void
    setAddresses: React.Dispatch<React.SetStateAction<Address[]>>;
}

const AddressCard = ({ addr, onEditHandler, setAddresses } : AddressCardProps ) => {

    const handelDelete = async (id: string) => {
        console.log(id)
        setAddresses((prev) => prev.filter((a) => a._id !== id))
    }

    return (
        <div key={addr._id} className='max-w-3xl bg-white rounded-2xl p-6 flex items-start justify-between shadow-sm'>
            {/* left */}
            <div className="flex gap-4">
                <div className='size-10 rounded-xl bg-app-cream flex items-center justify-center shrink-0'>
                    <MapPinIcon className="size-5 text-app-green" />
                </div>
                <div>
                    <div className='flex items-center gap-2 mb-1'>
                        <p className="text-sm font-semibold text-app-green">{addr.label}</p>
                        {addr.isDefault && (
                            <span className='flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-medium bg-app-green text-white rounded-full'>
                                <CheckIcon className="size-2.5"/>
                                Default
                            </span>
                        )}
                    </div>
                    <p className='text-sm text-app-text-light'>
                        {addr.address}, {addr.city}, {addr.state} {addr.zip}
                    </p>
                </div>
            </div>

            {/* right - action buttons */}
            <div className="flex items-center gap-1 shrink-0">
                <button 
                    onClick={() => onEditHandler(addr)}
                    className="p-2 text-app-text-light hover:text-app-green hover:bg-app-cream rounded-lg transition-colors"
                    title="Edit Address"
                >
                    <PencilIcon className="size-4" />
                </button>

                <button 
                    onClick={() => handelDelete(addr._id)}
                    className="p-2 text-app-text-light hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    title="Delete Address"
                >
                    <TrashIcon className="size-4" />
                </button>
            </div>
        </div>
    )
}

export default AddressCard