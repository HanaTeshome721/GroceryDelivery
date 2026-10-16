import { XIcon } from "lucide-react"

// interface AddressFormProps {
//     resetForm: () => void;
//     handleSubmit: (e: React.FormEvent) => void;
//     form: {
//         label: string;
//         address: string;
//         city: string;
//         state: string;
//         zip: string;
//         isDefault: boolean;
//     };
//     setForm: React.Dispatch<React.SetStateAction<any>>;
//     editingId: string | null;
// }

const AddressForm = ({ resetForm, handleSubmit, form, setForm, editingId }: any) => {

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value, type, checked } = e.target;
    //     setForm((prev: typeof form) => ({
    //         ...prev,
    //         [name]: type === "checkbox" ? checked : value
    //     }));
    // };

    return (
        <>
            {/* overlay */}
            <div 
                onClick={resetForm} 
                className="fixed inset-0 bg-black/40 z-50"
            />

            {/* form container */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <form 
                    onClick={e=>e.stopPropagation()}
                    onSubmit={handleSubmit} 
                    className="bg-white rounded-2xl p-6 w-full max-w-lg animate-fade-in shadow-xl"
                >
                    {/* form header */}
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-app-green">
                            {editingId ? "Edit Address" : "Add New Address"}
                        </h2>
                        <button 
                            type="button" 
                            onClick={resetForm} 
                            className="p-2 hover:bg-app-cream rounded-lg transition-colors"
                        >
                            <XIcon className="size-5" />
                        </button>
                    </div>

                    {/* form inputs */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-medium text-app-green mb-1">
                                Label (e.g. Home, Work)
                            </label>
                            <input
                                type="text"
                                name="label"
                                value={form.label}
                                onChange={(e)=>setForm({...form, label:e.target.value})}
                                required
                                className="w-full px-3 py-2 border border-app-border rounded-xl focus:outline-none focus:ring-1 focus:ring-app-green text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-app-green mb-1">
                                Street Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                 onChange={(e)=>setForm({...form, address:e.target.value})}
                                required
                                className="w-full px-3 py-2 border border-app-border rounded-xl focus:outline-none focus:ring-1 focus:ring-app-green text-sm"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-xs font-medium text-app-green mb-1">
                                    City
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                     onChange={(e)=>setForm({...form, city:e.target.value})}
                                    required
                                    className="w-full px-3 py-2 border border-app-border rounded-xl focus:outline-none focus:ring-1 focus:ring-app-green text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-app-green mb-1">
                                    State
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    value={form.state}
                                    onChange={(e)=>setForm({...form, state:e.target.value})}
                                    required
                                    className="w-full px-3 py-2 border border-app-border rounded-xl focus:outline-none focus:ring-1 focus:ring-app-green text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-app-green mb-1">
                                ZIP Code
                            </label>
                            <input
                                type="text"
                                name="zip"
                                value={form.zip}
                                 onChange={(e)=>setForm({...form, zip:e.target.value})}
                                required
                                className="w-full px-3 py-2 border border-app-border rounded-xl focus:outline-none focus:ring-1 focus:ring-app-green text-sm"
                            />
                        </div>

                     <div className="flex items-end pb-1">
    <label className="block text-sm font-medium text-app-green mb-1.5">
        <input type="checkbox" checked={form.isDefault} onChange={(e)=>setForm({...form, isDefault: e.target.value})} />
        <span className="text-sm text-app-text">Set as default</span>
    </label>
</div>

                    </div>

                    {/* form actions */}
                    <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-app-border">
                        <button
                            type="button"
                            onClick={resetForm}
                            className="px-4 py-2 text-sm font-medium text-app-text-light hover:bg-app-cream rounded-xl transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 text-sm font-semibold text-white bg-app-green hover:bg-app-green-light rounded-xl transition-colors"
                        >
                            {editingId ? "Update Address" : "Save Address"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddressForm