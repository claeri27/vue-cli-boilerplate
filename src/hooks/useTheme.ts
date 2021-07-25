export const useTheme = () => {
  let theme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  if (theme) document.documentElement.setAttribute('data-theme', theme)

  const toggleTheme = () => {
    const targetTheme = theme === 'dark' ? 'light' : 'dark'
    theme = targetTheme
    localStorage.setItem('theme', targetTheme)
    document.documentElement.setAttribute('data-theme', targetTheme)
  }

  return { theme, toggleTheme }
}
