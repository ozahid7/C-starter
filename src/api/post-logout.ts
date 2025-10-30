import Caxios from '@/utils/custom-axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const usePostLogout = () => {
    async function PostLogout() {
        try {
            await Caxios('get', `/api/auth/logout`);
        } catch (e) {
            if (e instanceof AxiosError) {
                throw e;
            }
            throw e;
        }
    }

    return useMutation({
        mutationKey: ['post-logout'],
        mutationFn: PostLogout,
    });
};
