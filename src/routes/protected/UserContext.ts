import type { Session } from '@auth/core/types';
import type { Signal } from '@builder.io/qwik';
import { createContext, useContext, useContextProvider } from '@builder.io/qwik';

type UserContextState = Signal<Session['user']>;

const UserContext = createContext<UserContextState>('session-context');

export const useUserContextProvider = (state: UserContextState) => {
  useContextProvider(UserContext, state);
};

export const useUserContext = () => {
  return useContext(UserContext);
};
