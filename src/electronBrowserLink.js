import { shell } from 'electron'
import isElectronRenderer from 'is-electron-renderer'

export default function electronBrowserLink(url) {
  if (isElectronRenderer) {
    shell.openExternal(url)

  } else {
    window.location.href = url
  }
}
