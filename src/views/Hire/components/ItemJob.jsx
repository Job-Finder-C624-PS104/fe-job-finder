import { Card, CardBody, CardFooter, CardHeader, Divider } from '@nextui-org/react'
import React from 'react'
import parse from 'html-react-parser'
import PropTypes from 'prop-types'
import { formatDate, formatRupiah, truncateDescription } from '@/utils/index'
import { MdOutlineWatchLater } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ItemJob = ({ job }) => {
  return (
    <section>
      <Link to={`/manage-jobs/${job.id}`}>
        <Card radius='sm' className="w-[100%] md:w-[430px] 2xl:w-[495px] transition-transform ease-in-out duration-300 hover:scale-105 transform cursor-pointer">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <h2 className="text-base font-medium sm:text-lg">
                {job.title}
              </h2>
              <p className="text-xs text-gray-400">{job.location}</p>
              <p className="text-sm text-green-500 sm:text-base">{formatRupiah(job.salarymin)} - {formatRupiah(job.salarymax)}</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <div>{parse(truncateDescription(job.description, 150))}</div>
          </CardBody>
          <Divider/>
          <CardFooter>
            <p className="text-sm  text-[#6b7280] px-5 w-full flex justify-end items-center gap-2">
            <MdOutlineWatchLater />
            {formatDate(job.created_at)}
          </p>
          </CardFooter>
        </Card>
      </Link>
    </section>
  )
}

ItemJob.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    salarymin: PropTypes.number.isRequired,
    salarymax: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}

export default ItemJob
