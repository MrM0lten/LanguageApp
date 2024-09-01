import { useColorScheme } from "react-native";
import { Colors } from '@/constants/Colors';

export function useColors() {
    const theme = useColorScheme() ?? 'light'; // Default to 'light' theme if none is set
    return Colors[theme];
  }