/*
Copyright 2018 - 2022 The Alephium Authors
This file is part of the alephium project.

The library is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

The library is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with the library. If not, see <http://www.gnu.org/licenses/>.
*/

import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import styled from 'styled-components'

import { appHeaderHeightPx, walletSidebarWidthPx } from '@/style/globalStyles'

import Button from '../components/Button'
import WalletSwitcher from '../components/WalletSwitcher'
import { useGlobalContext } from '../contexts/global'
import ModalContainer, { ModalContainerProps } from './ModalContainer'

const NotificationsModal = ({ onClose, focusMode }: ModalContainerProps) => {
  const { lockWallet } = useGlobalContext()

  return (
    <ModalContainer onClose={onClose} focusMode={focusMode}>
      <NotificationsBox
        role="dialog"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      >
        <WalletSwitcher />
        <Button onClick={lockWallet} wide transparent Icon={Lock}>
          Lock wallet
        </Button>
      </NotificationsBox>
    </ModalContainer>
  )
}

const NotificationsBox = styled(motion.div)`
  display: flex;
  flex-direction: column;

  position: absolute;
  left: ${walletSidebarWidthPx}px;
  top: ${appHeaderHeightPx}px;

  padding: 27px 19px;
  width: 304px;
  max-height: 95vh;

  box-shadow: ${({ theme }) => theme.shadow.tertiary};
  border: 1px solid ${({ theme }) => theme.border.primary};
  border-radius: var(--radius);
  background-color: ${({ theme }) => theme.bg.background1};

  overflow: hidden;
  z-index: 1;
`

export default NotificationsModal
