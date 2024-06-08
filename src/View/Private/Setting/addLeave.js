import { Modal } from 'flowbite-react';
import TextInput from "../../../Component/Shared/TextInput";
import DatePicker from "../../../Component/Shared/DatePicker";

const AddUpdateLeave = (props) => {

    return (
        <>
            <Modal show={props.isOpen} size={'xl'} position="center" onClose={() => props.setOpenModal(false)}>
                <Modal.Header>{props.update ? "Update Leave" : "Add Leave"}</Modal.Header>
                <Modal.Body>
                    <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-12 bg-white">
                        <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 text-center">
                            <TextInput
                                showLabel={false}
                                defaultValue={props?.update?.type ? props.update.type : ""}
                                type="text"
                                label="Leave"
                                name="type"
                                id="type"
                                placeholder="Leave"
                                error={false}
                                errorMessage=""
                                onChange={(e) => console.log(e)}
                            />
                        </div>
                        <div className=" lg:col-span-12 md:col-span-12 sm:col-span-12 text-center mt-1">
                        <TextInput
                                showLabel={false}
                                defaultValue={props?.update?.yearly ? props.update.yearly : ""}
                                type="number"
                                label="Yearly"
                                name="yearly"
                                id="yearly"
                                placeholder="Yearly"
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
export default AddUpdateLeave;