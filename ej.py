from scipy import stats

s1_sq, n1 = 144, 25  # Línea A
s2_sq, n2 = 64, 20   # Línea B
F = s1_sq / s2_sq
df1, df2 = n1 - 1, n2 - 1
probabilidad = stats.f.sf(2, df1, df2)
print(f"F calculado = {F:.3f}")
print(f"df = ({df1}, {df2})")
print(f"P(F > 2) = {probabilidad:.4f}")