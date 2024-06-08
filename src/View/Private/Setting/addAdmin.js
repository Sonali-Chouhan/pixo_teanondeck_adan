import { Modal } from 'flowbite-react';
import TextInput from "../../../Component/Shared/TextInput";

const AddUpdateAdmin = (props) => {

    return (
        <>
            <Modal show={props.isOpen} size={'xl'} position="center" onClose={() => props.setOpenModal(false)}>
                <Modal.Header>{props.update ? "Update Admin" : "Add Admin"}</Modal.Header>
                <Modal.Body>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-white p-2">
                        <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 text-center">
                            <TextInput
                                showLabel={false}
                                defaultValue={props?.update?.id ? props.update.id:""}
                                type="text"
                                label="Employee Id"
                                name="id"
                                id="id"
                                placeholder="Employee Id"
                                error={false}
                                errorMessage=""
                                onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 text-center mt-1">
                            <TextInput
                                showLabel={false}
                                defaultValue={props?.update?.name ? props.update.name:""}
                                type="text"
                                label="Name"
                                name="name"
                                id="name"
                                placeholder="Name"
                                error={false}
                                errorMessage=""
                                onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 text-center mt-1">
                            <TextInput
                                showLabel={false}
                                type="text"
                                defaultValue={props?.update?.phone ? props.update.phone:""}
                                label="Phone"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                                error={false}
                                errorMessage=""
                                onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 text-center mt-1">
                            <TextInput
                                showLabel={false}
                                type="text"
                                defaultValue={props?.update?.email ? props.update.email:""}
                                label="Email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                error={false}
                                errorMessage=""
                                onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 text-center mt-3">
                            <button className="rounded-full text-white bg-[#643FDB] focus:ring-4 font-poppins p-2 m-2"
                                onClick={() => props.setOpenModal(false)}>{props.update ? "Update" : "Save"}</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default AddUpdateAdmin;