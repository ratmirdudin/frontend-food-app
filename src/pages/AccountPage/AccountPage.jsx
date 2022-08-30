import React from 'react';
import {useGetCurrentUserQuery} from "../../app/user/userApiSlice";

const AccountPage = () => {
    const {data: user, isError, isLoading} = useGetCurrentUserQuery()
    return (
        <div>
            {isLoading
                ?
                <div>ЗАГРУЗКА ЗАГРУЗКА ЗАГРУЗКА ЗАГРУЗКА ЗАГРУЗКА ЗАГРУЗКА</div>
                :
                <div>
                    {isError
                        ?
                        <div>ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА ОШИБКА</div>
                        :
                        <div>{JSON.stringify(user)}</div>
                    }
                </div>
            }
        </div>
    );
};

export default AccountPage;