
import React from 'react';
import { UserType } from '../Types/type';
import { userRequest } from '../Service/service';
import {PER_PAGE} from '../Config/constants';
import Pagination from '../Components/Pagination';
import UserTable from '../Components/UserTable';

export default function UserPage() {
    
    const [users, setUsers] = React.useState<UserType[]>([]);
    const [allUsers, setAllUsers] = React.useState<UserType[]>([]);
    const [totalPage, setTotalPage] = React.useState<number[]>([0]);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    
    const handlePage = (pageNo : number) => {
        const start = pageNo * PER_PAGE;
        const usersList = allUsers.slice(start, start+ PER_PAGE);
        setUsers(usersList);
        setCurrentPage(pageNo);
    }
    React.useEffect( () => {
          const fetchData = async () => {
              let response;
              try {
                response = await userRequest();
                setAllUsers(response.data);
                setUsers(response.data.slice(0,PER_PAGE));
                const userCount = response.data.length;
               
                if(userCount > PER_PAGE) {
                    const totalPage = Math.ceil(userCount/PER_PAGE);
                    const totalPageArr = Array.from(Array(totalPage).keys())
                    setTotalPage(totalPageArr);
                } 
              }
              catch {
                console.log('unable to get users');
              }
          }
         
          fetchData();
    }, [])
   
    return (
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
                <div className="row">
                    <div className="col-lg-12 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">List of Users</h4>
                                <p className="card-description">
                                   Welcome to dashboard
                                </p>
                                <UserTable users={users} />
                                {totalPage.length > 1 &&  (
                                    <Pagination items={totalPage} currentPage={currentPage} handlePage={pageNo => handlePage(pageNo)} />
                                )}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}