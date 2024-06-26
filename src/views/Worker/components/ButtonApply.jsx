import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@nextui-org/react'
import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ButtonApply = ({ data, handleApply, onOpen, onOpenChange, isOpen }) => {
  const user = useSelector((state) => state.authUser)
  const navigate = useNavigate()
  const applyJob = useSelector((state) => state.applyJob)

  const job = applyJob.find((job) => job.id_job === data.id)

  return (
    <div className="flex flex-row w-full gap-2 mx-auto md:w-fit md:mx-0 md:flex-col md:ml-auto">
      {job
        ? (
        <div className="w-full text-sm text-center md:w-fit ">
          <p className='px-4 py-2 font-semibold text-white bg-red-800 rounded-lg '>Sudah Daftar</p>
        </div>
          )
        : (
        <Button onPress={user === null ? () => navigate('/login') : onOpen} className="w-full font-semibold text-white bg-blue md:w-fit ">
        Lamar Pekerjaan
        </Button>
          )}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop: 'bg-[rgba(0,0,0,0.5)] dark:bg-[rgba(255,255,255,0.5)]'
        }}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut'
              }
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn'
              }
            }
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-base font-medium sm:text-lg">
                  Lamar Pekerjaan di{' '}
                  <span className="text-blue">{data.company}</span> sebagai{' '}
                  <span className="text-blue">{data.title}</span>
                </h2>
              </ModalHeader>
              <ModalBody>
                <h2 className="text-base font-medium">Informasi Kontak</h2>
                {user && (
                  <div>
                    <div className="flex flex-col pb-2">
                      <label htmlFor="name">Nama</label>
                      <p className="text-sm">{user.name}</p>
                    </div>
                    <div className="flex flex-col pb-2">
                      <label htmlFor="email">Email</label>
                      <p className="text-sm">{user.email}</p>
                    </div>
                    <div className="flex flex-col pb-2">
                      <label htmlFor="phone">No Hp</label>
                      <p className="text-sm">{user.phone}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="cv">CV</label>
                      <div className="relative">
                        <div className={`px-4 py-2 text-sm text-center text-white rounded ${user.file_url ? 'bg-green-500' : 'bg-blue'}`}>
                          {user.file_url ? 'CV telah dipilih' : 'CV tidak tersedia'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' radius='sm' onPress={onClose}>
                  Batal
                </Button>
                <Button className='text-white bg-blue' radius='sm' onPress={handleApply}>
                  Kirim
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

ButtonApply.propTypes = {
  data: PropTypes.object.isRequired,
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    }).isRequired
  ),
  handleApply: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default ButtonApply
