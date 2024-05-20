import { Table, TableCell } from 'flowbite-react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashAdds() {
  const { currentUser } = useSelector((state) => state.user);
    const [userAdds, setUserAdds] = useState([]);

    console.log(userAdds);
    
  useEffect(() => {
    const fetchAdds = async () => {
        try {
            const res = await fetch(`/api/add/getadds?userId=${currentUser._id}`);
            const data = await res.json();
            if (res.ok) {
                setUserAdds(data.adds);
                
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    if (currentUser.isAdmin) {
        fetchAdds();
    }
}, [currentUser._id]);

  return (
    <div className='table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500'>
            {currentUser.isAdmin && userAdds.length > 0 ? (
                <>
                    <Table hoverable className='shadow-md'>
                        <Table.Head>
                            <Table.HeadCell>Date updated</Table.HeadCell>
                            <Table.HeadCell>Add image</Table.HeadCell>
                            <Table.HeadCell>Add title</Table.HeadCell>
                            
                            
                            <Table.HeadCell>Delete</Table.HeadCell>
                            <Table.HeadCell>
                                <span>Edit</span>
                            </Table.HeadCell>
                            <Table.HeadCell>Publish</Table.HeadCell>
                        </Table.Head>
                        {userAdds.map((add) => (
                            <Table.Body className='divide-y'>
                                <Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
                                    <Table.Cell>
                                        {new Date(add.updatedAt).toLocaleDateString()}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link >
                                            <img
                                                src={add.image}
                                                alt={add.title}
                                                className='w-20 h-10 object-cover bg-gray-500'
                                            />
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            className='font-medium text-gray-900 dark:text-white'
                                            
                                        >
                                            {add.title}
                                        </Link>   
                                    </Table.Cell>
                                    <Table.Cell>
                                    <span
                                            // onClick={() => {
                                            //     setShowModal(true);
                                            //     setPostIdToDelete(post._id);
                                            // }}
                                            className='font-medium text-red-500 hover:underline cursor-pointer'
                                        >
                                            Delete
                                        </span>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link
                                            className='text-teal-500 hover:underline'
                                            
                                        >
                                            <span>Edit</span>
                                        </Link>
                                    </Table.Cell>
                                    <TableCell><button className='text-teal-500 hover:underline'>Show</button>
                                    </TableCell>
                                </Table.Row>
                            </Table.Body>
                        ))}
                    </Table>
                    
                </>
            ) : (<p>You have no posts yet!</p>)}
    </div>
  )
}
